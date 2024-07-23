import * as styled from "./styles";
import * as config from "./config";
import Input from "../../../UI/input/Input";
import Icon from "../../../UI/Icon";
import Button from "../../../UI/button/Button";
import SelectProfilePhoto from "../../select-profile-photo/SelectProfilePhoto";
import useForm from "../../../../hooks/useForm";
import UserAPI from "../../../../API/User";
import useAsyncTask from "../../../../hooks/useAsyncTask";
import Select from "../../../UI/Select";

interface IDemoAccontForm {
  timer: number;
}

const DemoAccountForm: React.FC<IDemoAccontForm> = (props) => {
  const { timer, ...rest } = props;
  const { formState, form } = useForm<config.DemoAccountFormData>();
  const { asyncTaskHandler, isLoading } = useAsyncTask();

  const btnDisabled = isLoading || !!timer;

  function onBaseAvatarSelect(files: FileList) {
    form.setValue("photo", files, { shouldValidate: true });
  }

  const onSubmit = form.handleSubmit(async (data) => {
    const { photo, nickname, gender } = data;
    const file = photo?.item(0);
    if (!file) return form.setError("photo", { message: "Select an image" });
    const reader = new FileReader();
    reader.onload = async function () {
      const image = reader.result as string;
      await asyncTaskHandler(UserAPI.openDemo({ nickname, image, gender }));
    };
    reader.readAsDataURL(file);
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
          {config.inputs.map(({ name, icon, label, registerOptions }, idx) => (
            <Input
              key={idx}
              size="small"
              label={label}
              disabled={isLoading}
              onClear={form.onInputClear(name)}
              {...form.register(name, registerOptions)}
              error={!!formState.errors[name]?.message}
              helperText={formState.errors[name]?.message}
              adornmentStart={icon && <Icon icon={icon} />}
            />
          ))}

          {config.selects.map(({ options, name, label, registerOptions }) => (
            <Select
              key={name}
              size="small"
              label={label}
              options={options}
              variant="outlined"
              disabled={isLoading}
              error={!!formState.errors[name]?.message}
              {...form.register(name, registerOptions)}
              helperText={formState.errors[name]?.message}
            />
          ))}

          <SelectProfilePhoto
            onBaseAvatarSelect={onBaseAvatarSelect}
            inputProps={{
              disabled: isLoading,
              error: !!formState.errors.photo?.message,
              ...form.register("photo"),
            }}
          />
        </styled.Inputs>

        <styled.Actions>
          <Button
            type="submit"
            color="success"
            disabled={btnDisabled}
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
