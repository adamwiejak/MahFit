import * as styled from "./styles";
import * as config from "./config";
import { useForm } from "react-hook-form";
import useAsyncTask from "../../../../hooks/useAsyncTask";
import { onFormInputClear } from "../../../../helpers/functions/functions";
import Input from "../../../UI/input/Input";
import Icon from "../../../UI/Icon";
import Select from "../../../UI/Select";
import RadioGroup from "../../../UI/RadioGroup";
import Button from "../../../UI/button/Button";
import { BoxProps } from "@mui/material";
import UserAPI, { type SinginUserData } from "../../../../API/User";
import { TaskResponse } from "../../../../classes/TaskResponse";
import { unmachedPasswords } from "../../../../helpers/responses";

export interface ISingupForm extends BoxProps {}

const SignupForm: React.FC<ISingupForm> = (props) => {
  const { asyncTaskHandler, isLoading } = useAsyncTask();
  const { formState, ...form } = useForm<SinginUserData>();

  const onSubmit = form.handleSubmit(async (data) => {
    const asyncTask = async () => {
      const { password: p, repeatPassword: rP } = data;
      if (p !== rP) throw new Error(unmachedPasswords);
      await UserAPI.singupUserWithEmail(data);
    };

    try {
      await asyncTaskHandler(asyncTask);
    } catch (err: any) {
      const { includes, message } = err as TaskResponse;

      if (includes("email")) form.setError("email", { message });
      if (includes("password")) form.setError("password", { message });
      if (includes("passwords")) form.setError("repeatPassword", { message });
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
