import * as styled from "./styles";
import * as config from "./config";
import { useForm } from "react-hook-form";
import useAsyncTaskHandler from "../../../../hooks/useAsyncTask";
import { onFormInputClear } from "../../../../helpers/functions/functions";
import Input from "../../../UI/input/Input";
import Icon from "../../../UI/Icon";
import Button from "../../../UI/button/Button";
import { RetrivePasswordForm } from "../retrive-password-form/RetrivePasswordForm";
import UserAPI, { LoginUserData } from "../../../../API/User";
import { TaskResponse } from "../../../../classes/TaskResponse";

const LoginForm: React.FC<config.LoginFormProps> = (props) => {
  const { ...rest } = props;
  const { asyncTaskHandler, isLoading } = useAsyncTaskHandler();
  const { formState, ...form } = useForm<LoginUserData>();

  const onSubmit = form.handleSubmit(async (data) => {
    const asyncTask = async () => {
      await UserAPI.loginUserWithEmail(data);
    };

    try {
      await asyncTaskHandler(asyncTask);
    } catch (err: any) {
      console.log(err);
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
            color="secondary"
            key={name}
            type={type}
            label={label}
            disabled={isLoading}
            adornmentStart={<Icon icon={icon} />}
            error={!!formState.errors[name]?.message}
            helperText={formState.errors[name]?.message}
            onClear={onFormInputClear(form, name)}
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

        <RetrivePasswordForm sx={{ mb: 2 }} />
      </styled.Actions>
    </styled.Form>
  );
};

export default LoginForm;
