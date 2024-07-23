import * as styled from "./styles";
import * as config from "./config";
import useAsyncTask, { TaskError } from "../../../../hooks/useAsyncTask";
import Input from "../../../UI/input/Input";
import Icon from "../../../UI/Icon";
import RadioGroup from "../../../UI/RadioGroup";
import Button from "../../../UI/button/Button";
import { BoxProps } from "@mui/material";
import UserAPI from "../../../../API/User";
import useForm from "../../../../hooks/useForm";
import DatePicker from "../../date-picker/DatePicker";

export interface ISingupForm extends BoxProps {}

const SignupForm: React.FC<ISingupForm> = (props) => {
  const { ...rest } = props;
  const { asyncTaskHandler, isLoading } = useAsyncTask();
  const { formState, form } = useForm<config.FormData>();

  const onSubmit = form.handleSubmit(async (data) => {
    const { password: p, repeatPassword: rP } = data;
    try {
      if (p !== rP) throw new TaskError(new Error("Passwords do not match"));
      await asyncTaskHandler(UserAPI.createUserWithEmail(data));
    } catch (err: any) {
      console.log(err);
      const { includes, message, displaySnackbar } = err as TaskError;
      if (includes("email")) form.setError("email", { message });
      if (includes("password")) form.setError("password", { message });
      if (includes("passwords")) form.setError("repeatPassword", { message });
      displaySnackbar("warning");
    }
  });

  return (
    <styled.Form component="form" onSubmit={onSubmit} {...rest}>
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
            adornmentStart={icon ? <Icon icon={icon} /> : undefined}
          />
        ))}

        <DatePicker
          name="birthDate"
          label="Birth Date"
          disabled={isLoading}
          control={form.control}
        />

        <RadioGroup
          row
          color="secondary"
          label="Gender"
          disabled={isLoading}
          options={config.radioGroup.options}
          error={!!formState.errors.gender?.message}
          helperText={formState.errors.gender?.message}
          {...form.register(
            config.radioGroup.name,
            config.radioGroup.registerOptions
          )}
        />
      </styled.Inputs>

      <styled.Actions>
        <Button
          type="submit"
          text="Sign Up"
          color="secondary"
          inProgress={isLoading}
          endIcon={<Icon icon="send" />}
        />
      </styled.Actions>
    </styled.Form>
  );
};

export default SignupForm;
