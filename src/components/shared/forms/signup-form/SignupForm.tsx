import * as styled from "./styles";
import * as config from "./config";
import { useForm } from "react-hook-form";
import useAsyncTask from "../../../../hooks/useAsyncTask";
import { onFormInputClear } from "../../../../helpers/functions/functions";
import UserAPI, { SinginUserData } from "../../../../utils/User/user-api";
import Input from "../../../primitives/Input";
import Icon from "../../../primitives/Icon";
import Select from "../../../primitives/Select";
import RadioGroup from "../../../primitives/RadioGroup";
import Button from "../../../primitives/Button";
import { BoxProps } from "@mui/material";

export interface ISingupForm extends BoxProps {}

const SignupForm: React.FC<ISingupForm> = (props) => {
  const { asyncHandler, isLoading } = useAsyncTask();
  const { formState, ...form } = useForm<SinginUserData>();

  const onSubmit = form.handleSubmit(async (data) => {
    const { password: p, repeatPassword: rP } = data;
    const passwordsNotMatch = "Passwords do not match";

    try {
      if (p !== rP) throw new Error(passwordsNotMatch);
      await asyncHandler(() => UserAPI.singupUserWithEmail(data));
    } catch (asyncError: any) {
      const { message, includes } = asyncError;

      if (includes(passwordsNotMatch)) {
        const passwordInputs: config.InputName = ["password", "repeatPassword"];
        passwordInputs.forEach((name) => form.setError(name, { message }));
      }
    }
  });

  return (
    <styled.Form component="form" onSubmit={onSubmit} {...props}>
      <styled.Inputs>
        {config.inputs.map((input) => (
          <Input
            color="secondary"
            key={input.name}
            type={input.type}
            label={input.label}
            disabled={isLoading}
            adornmentStart={<Icon icon={input.icon} />}
            error={!!formState.errors[input.name]?.message}
            helperText={formState.errors[input.name]?.message}
            onClear={onFormInputClear(form, input.name)}
            {...form.register(input.name, input.options)}
          />
        ))}

        <styled.DateBox>
          {config.selects.map(({ name, inputs, label, options }) => (
            <Select
              {...form.register(name, options)}
              size="small"
              key={name}
              label={label}
              inputs={inputs}
              value={form.watch(name)}
              error={!!formState.errors[name]?.message}
              helperText={formState.errors[name]?.message}
            />
          ))}
        </styled.DateBox>

        <RadioGroup
          row
          color="secondary"
          label="Gender"
          value={form.watch("gender")}
          inputs={config.radioGroup.inputs}
          error={!!formState.errors.gender?.message}
          helperText={formState.errors.gender?.message}
          {...form.register(config.radioGroup.name, config.radioGroup.options)}
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
