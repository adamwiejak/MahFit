import * as styled from "./styles";
import * as config from "./config";
import Input from "../../../UI/input/Input";
import Icon from "../../../UI/Icon";
import Button from "../../../UI/button/Button";
import SelectProfilePhoto from "../../select-profile-photo/SelectProfilePhoto";
import useForm from "../../../../hooks/useForm";
import UserAPI from "../../../../API/User";
import useAsyncTask from "../../../../hooks/useAsyncTask";
import type { TaskResponse } from "../../../../classes/TaskResponse";

interface IDemoAccontForm {
  timer: number;
}

const DemoAccountForm: React.FC<IDemoAccontForm> = (props) => {
  const { timer, ...rest } = props;
  const { formState, form } = useForm<config.FormData>();
  const { asyncTaskHandler, isLoading } = useAsyncTask();
  const disabled = isLoading || !!timer;

  function onBaseAvatarSelect(files: FileList) {
    form.setValue("photo", files, { shouldValidate: true });
  }

  const onSubmit = form.handleSubmit(async (data) => {
    const { photo, nickname } = data;
    const gender = "other";
    const image = photo?.item(0);
    if (!image) return form.setError("photo", { message: "Select an image" });

    try {
      await asyncTaskHandler(UserAPI.openDemo({ nickname, image, gender }));
    } catch (err) {
      const { displaySnackbar, message } = err as TaskResponse;
      form.setError("root", { message });
      displaySnackbar();
    }
  });

  return (
    <>
      <styled.Card elevation={10}>
        {config.paragraphs.map((p, i) => (
          <styled.Paragraph key={i} variant="body1">
            {p}
          </styled.Paragraph>
        ))}
      </styled.Card>

      <styled.Form
        sx={{ mt: 5 }}
        component="form"
        onSubmit={onSubmit}
        {...rest}
      >
        <styled.Inputs>
          {config.inputs.map(({ name, icon, label, options }, idx) => (
            <Input
              key={idx}
              size="small"
              label={label}
              disabled={disabled}
              adornmentStart={icon && <Icon icon={icon} />}
              error={!!formState.errors[name]?.message}
              onClear={form.onInputClear(name)}
              {...form.register(name, options)}
              defaultValue="Batman"
            />
          ))}

          <SelectProfilePhoto
            onBaseAvatarSelect={onBaseAvatarSelect}
            inputProps={{
              disabled,
              error: !!formState.errors.photo?.message,
              ...form.register("photo"),
            }}
          />
        </styled.Inputs>

        <styled.Errors>
          {Object.values(formState.errors).map((err, i) => (
            <styled.Paragraph key={i} color="error" variant="caption">
              {err.message as string}
            </styled.Paragraph>
          ))}
        </styled.Errors>

        <styled.Actions>
          <Button
            type="submit"
            color="success"
            disabled={disabled}
            inProgress={isLoading}
            text={`Create Demo Account ${timer ? `(${timer})` : ""}`}
            endIcon={<Icon icon="send" />}
          />
        </styled.Actions>
      </styled.Form>
    </>
  );
};

export default DemoAccountForm;
