import * as styled from "./styles";
import * as config from "./config";
import { v4 as uuidv4 } from "uuid";
import useForm from "../../hooks/useForm";
import useAsyncTask from "../../hooks/useAsyncTask";
import { BoxProps } from "@mui/material";
import Icon from "../../components/UI/Icon";
import RadioGroup from "../../components/UI/RadioGroup";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import { Database as DB } from "../../utils/Firebase";
import UserAPI, { User } from "../../API/User";

export interface ISingupForm extends BoxProps {}

const CreateDummyUserForm: React.FC<ISingupForm> = (props) => {
  const { asyncTaskHandler, isLoading } = useAsyncTask();
  const { formState, form } = useForm<config.FormData>();

  const onSubmit = form.handleSubmit(async (data) => {
    const { nickname, gender, photoURL } = data;
    const uid = uuidv4();
    const birthDate = new Date();
    const email = `${nickname.toLowerCase()}@.example.com`;

    const dumyUser: User = {
      base: { nickname, gender, uid, email, birthDate },
      details: { photoURL },
    };

    try {
      const userRef = UserAPI.createUserQuery(uid);
      await asyncTaskHandler(DB.setDocument(userRef, dumyUser));
    } catch (err: any) {
      console.log(err);
      form.setError("root", { message: err.message });
    }
  });

  return (
    <styled.Wrapper>
      <styled.Form component="form" onSubmit={onSubmit} {...props}>
        <styled.Inputs>
          {config.inputs.map(({ name, type, label, icon, registerOptions }) => (
            <Input
              color="secondary"
              key={name}
              type={type}
              label={label}
              disabled={isLoading}
              onClear={form.onInputClear(name)}
              {...form.register(name, registerOptions)}
              error={!!formState.errors[name]?.message}
              adornmentStart={icon && <Icon icon={icon} />}
            />
          ))}

          <RadioGroup
            row
            disabled={isLoading}
            options={config.radioGroup.options}
            error={!!formState.errors.gender?.message}
            {...form.register(
              config.radioGroup.name,
              config.radioGroup.options
            )}
          />
        </styled.Inputs>

        <styled.Actions>
          <Button
            type="submit"
            inProgress={isLoading}
            text="Create Dummy User in DB"
            endIcon={<Icon icon="send" />}
          />
        </styled.Actions>
      </styled.Form>
    </styled.Wrapper>
  );
};

export default CreateDummyUserForm;
