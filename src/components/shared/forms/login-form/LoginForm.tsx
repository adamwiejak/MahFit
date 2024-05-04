import * as styled from "./styles";
import * as config from "./config";
import { useForm } from "react-hook-form";
import useAsyncTaskHandler from "../../../../hooks/useAsyncTask";
import { onFormInputClear } from "../../../../helpers/functions/functions";
import UserAPI, { LoginUserData } from "../../../../utils/User/user-api";
import FormAutoFill from "../../../../_dev_tests/components/form-auto-fill/FortmAutoFill";
import Input from "../../../primitives/Input";
import Icon from "../../../primitives/Icon";
import Button from "../../../primitives/Button";
import { RetrivePasswordForm } from "../retrive-password-form/RetrivePasswordForm";

const LoginForm: React.FC<config.LoginFormProps> = (props) => {
  const { ...rest } = props;
  const { asyncHandler, isLoading } = useAsyncTaskHandler();
  const { formState, ...form } = useForm<LoginUserData>();

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await asyncHandler(() => UserAPI.loginUserWithEmail(data));
    } catch (err: any) {
      const message = err.message;
      if (message.includes("email")) return form.setError("email", { message });
      if (message.includes("password")) form.setError("password", { message });
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
