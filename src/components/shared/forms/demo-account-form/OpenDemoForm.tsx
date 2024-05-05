import styled from "./styles";
import * as config from "./config";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import useAsyncTaskHandler from "../../../../hooks/useAsyncTask";
import { onFormInputClear } from "../../../../helpers/functions/functions";
import Input from "../../../UI/input/Input";
import Icon from "../../../UI/Icon";
import Button from "../../../UI/button/Button";

const OpenDemoForm: React.FC<any> = (props) => {
  const { ...rest } = props;
  const { formState, ...form } = useForm<config.FormData>();
  const { asyncTaskHandler, isLoading } = useAsyncTaskHandler();

  const onSubmit = useCallback(async (data: config.FormData) => {
    const { email, password } = data;

    try {
      const response = await asyncTaskHandler(async () => {});
    } catch (err: any) {
      const message = err.message;
      if (message.includes("user")) return form.setError("email", { message });
      if (message.includes("password"))
        return form.setError("password", { message });
      form.setError("email", { message });
    }
  }, []);

  return (
    <styled.Form onSubmit={form.handleSubmit(onSubmit)} {...rest}>
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
      </styled.Inputs>

      <styled.Actions>
        <Button
          type="submit"
          inProgress={isLoading}
          text="Open Local Demo Account"
          endIcon={<Icon icon="user" />}
        />
      </styled.Actions>
    </styled.Form>
  );
};

export default OpenDemoForm;
