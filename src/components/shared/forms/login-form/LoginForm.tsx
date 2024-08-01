import * as styled from "./styles";
import * as config from "./config";
import useAsyncTaskHandler from "../../../../hooks/useAsyncTask";
import Input from "../../../UI/input/Input";
import Icon from "../../../UI/Icon";
import Button from "../../../UI/button/Button";
import { RetrivePasswordForm } from "../retrive-password-form/RetrivePasswordForm";
import UserAPI from "../../../../API/User";
import { TaskError } from "../../../../classes/TaskError";
import { CardProps } from "@mui/material";
import useForm from "../../../../hooks/useForm";

export interface ILoginFormProps extends CardProps {}

const LoginForm: React.FC<ILoginFormProps> = (props) => {
  const { ...rest } = props;
  const { asyncTaskHandler, isLoading } = useAsyncTaskHandler();
  const { formState, form } = useForm<config.FormData>();

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      await asyncTaskHandler(UserAPI.signInUserWithEmail(data));
    } catch (err: any) {
      const { includes, message } = err as TaskError;
      console.log(err);
      if (includes("user")) form.setError("email", { message });
      if (includes("password")) form.setError("password", { message });
    }
  });

  return (
    <styled.CardBox {...rest}>
      <styled.Form component="form" onSubmit={onSubmit}>
        <styled.Inputs>
          {config.inputs.map(({ name, type, label, icon, registerOptions }) => (
            <Input
              key={name}
              type={type}
              label={label}
              color="secondary"
              disabled={isLoading}
              onClear={form.onInputClear(name)}
              {...form.register(name, registerOptions)}
              error={!!formState.errors[name]?.message}
              helperText={formState.errors[name]?.message}
              adornmentStart={icon && <Icon icon={icon} />}
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
    </styled.CardBox>
  );
};

export default LoginForm;
