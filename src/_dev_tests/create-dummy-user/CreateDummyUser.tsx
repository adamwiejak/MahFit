import * as styled from "./styles";
import * as config from "./config";
import { v4 as uuidv4 } from "uuid";
import useForm from "../../hooks/useForm";
import useAsyncTask, { TaskError } from "../../hooks/useAsyncTask";
import { BoxProps } from "@mui/material";
import Icon from "../../components/UI/Icon";
import RadioGroup from "../../components/UI/RadioGroup";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import Database, { UserData, usersQuery } from "../../utils/Firebase/database";
import User from "../../classes/User";
import UserAPI from "../../API/User";

export interface ISingupForm extends BoxProps {}

const CreateDummyUserForm: React.FC<ISingupForm> = (props) => {
  const { asyncTaskHandler, isLoading } = useAsyncTask();
  const { formState, form } = useForm<config.FormData>();

  async function cleanupUsers() {
    try {
      const promise = Database.getColection<UserData[]>(usersQuery);
      const users = await asyncTaskHandler(promise);
      const undummyFilter = users?.filter((u) => u.isDummy !== true);
      console.log("DELATED_ACCOUNTS:", undummyFilter);
      undummyFilter.forEach(async ({ base: { uid } }) => {
        const docRef = Database.createDocumentRef(`users/${uid}`);
        await Database.deleteDocument(docRef);
      });
    } catch (err) {
      console.log(err);
    }
  }

  const onSubmit = form.handleSubmit(async (data) => {
    const { nickname, gender, photoURL } = data;
    const uid = uuidv4();
    const birthDate = new Date().toDateString();
    const email = `${nickname.toLowerCase()}@.example.com`;
    const base = { uid, email, gender, photoURL, nickname, birthDate };

    try {
      await asyncTaskHandler(UserAPI.setUserInDB({ base, isDummy: true }));
    } catch (err: any) {
      const { displaySnackbar } = err as TaskError;
      displaySnackbar("error");
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
            {...form.register(config.radioGroup.name, config.radioGroup.options)}
          />
        </styled.Inputs>

        <styled.Actions>
          <Button type="submit" inProgress={isLoading} text="Create Dummy User in DB" endIcon={<Icon icon="send" />} />

          <Button inProgress={isLoading} onClick={cleanupUsers} text="Remove Undummy Users/Authentication" />
        </styled.Actions>
      </styled.Form>
    </styled.Wrapper>
  );
};

export default CreateDummyUserForm;
