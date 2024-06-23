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
import { User } from "../../API/User";

export interface ISingupForm extends BoxProps {}

const SignupForm: React.FC<ISingupForm> = (props) => {
  const { asyncTaskHandler, isLoading } = useAsyncTask();
  const { formState, form } = useForm<config.FormData>();

  const onSubmit = form.handleSubmit(async (data) => {
    const { nickname, gender, photoURL } = data;
    const uid = uuidv4();
    const email = `${nickname.toLowerCase()}@.example.com`;

    const dumyUser: User = {
      base: { nickname, gender, uid, email },
      details: { photoURL },
    };

    try {
      await asyncTaskHandler(DB.setDocument(`dummy-users`, uid, dumyUser));
    } catch (err: any) {
      console.log(err);
      form.setError("root", { message: err.message });
    }
  });

  return (
    <styled.Wrapper>
      <styled.Form component="form" onSubmit={onSubmit} {...props}>
        <styled.Inputs>
          {config.inputs.map((input, i) => (
            <Input
              color="secondary"
              key={input.name}
              type={input.type}
              label={input.label}
              disabled={isLoading}
              adornmentStart={<Icon icon={input.icon} />}
              error={!!formState.errors[input.name]?.message}
              onClear={form.onInputClear(input.name)}
              {...form.register(input.name, input.options)}
            />
          ))}

          <RadioGroup
            row
            disabled={isLoading}
            inputs={config.radioGroup.inputs}
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

export default SignupForm;
