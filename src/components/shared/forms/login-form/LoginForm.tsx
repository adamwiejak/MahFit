import * as styled from "./styles";
import * as config from "./config";
import useAsyncTaskHandler from "../../../../hooks/useAsyncTask";
import Input from "../../../UI/input/Input";
import Icon from "../../../UI/Icon";
import Button from "../../../UI/button/Button";
import { RetrivePasswordForm } from "../retrive-password-form/RetrivePasswordForm";
import UserAPI, { LoginUserData } from "../../../../API/User";
import { TaskResponse } from "../../../../classes/TaskResponse";
import { BoxProps } from "@mui/material";
import useForm from "../../../../hooks/useForm";

export interface ILoginFormProps extends BoxProps {}

const LoginForm: React.FC<ILoginFormProps> = (props) => {
  const { ...rest } = props;
  const { asyncTaskHandler, isLoading } = useAsyncTaskHandler();
  const { formState, form } = useForm<LoginUserData>();

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await asyncTaskHandler(UserAPI.signInUserWithEmail(data));
    } catch (err: any) {
      const { includes, message } = err as TaskResponse;
      if (includes("user")) return form.setError("email", { message });
      if (includes("password")) form.setError("password", { message });
    }
  });

  return (
    <styled.Form component="form" onSubmit={onSubmit} {...rest}>
      <styled.Inputs>
        {config.inputs.map(({ name, type, label, icon, options }) => (
          <Input
            key={name}
            type={type}
            label={label}
            color="secondary"
            disabled={isLoading}
            adornmentStart={<Icon icon={icon} />}
            error={!!formState.errors[name]?.message}
            helperText={formState.errors[name]?.message}
            onClear={form.onInputClear(name)}
            {...form.register(name, options)}
          />
        ))}
      </styled.Inputs>

      <styled.Actions>
        <Button
          text="Log In"
          type="submit"
          color="secondary"
          inProgress={isLoading}
          endIcon={<Icon icon="send" />}
        />

        <RetrivePasswordForm />
      </styled.Actions>
    </styled.Form>
  );
};

export default LoginForm;
