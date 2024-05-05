import styled from "./styles";
import { ButtonProps, Divider, Typography } from "@mui/material";
import { emailRegEx, required } from "../../../../helpers/data/regex";
import { useForm } from "react-hook-form";
import useAsyncTaskHandler from "../../../../hooks/useAsyncTask";
import { onFormInputClear } from "../../../../helpers/functions/functions";
import Input from "../../../UI/input/Input";
import Icon from "../../../UI/Icon";
import useBoolean from "../../../../hooks/useBoolean";
import Dialog from "../../../modals/dialog/Dialog";
import UserAPI from "../../../../API/User";
import Button from "../../../UI/button/Button";

interface IRetrivePassword extends Omit<ButtonProps, "text"> {}

interface RetrivePasswordForm {
  email: string;
}

export const RetrivePasswordForm: React.FC<IRetrivePassword> = (props) => {
  const { ...rest } = props;
  const { asyncTaskHandler, isLoading } = useAsyncTaskHandler();
  const { formState, ...form } = useForm<RetrivePasswordForm>();

  const [retriveFormOpen, toggleRetriveFormOpen] = useBoolean(false);

  const submit = async (data: RetrivePasswordForm) => {
    try {
      asyncTaskHandler(async () => UserAPI.retrivePassword(data.email));
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      <Button
        size="small"
        variant="text"
        color="inherit"
        {...rest}
        text="Forgot Pasword ?"
        onClick={toggleRetriveFormOpen}
      />

      <Dialog
        open={retriveFormOpen}
        transitionComponent="zoom"
        onClose={toggleRetriveFormOpen}
      >
        <styled.Form component="form" onSubmit={form.handleSubmit(submit)}>
          <Typography>Type your email to get restore link</Typography>
          <Divider />

          <styled.Inputs>
            <Input
              disabled={isLoading}
              label="Your Email"
              error={!!formState.errors.email?.message}
              helperText={formState.errors.email?.message}
              onClear={onFormInputClear(form, "email")}
              {...form.register("email", { ...emailRegEx, ...required })}
            />
          </styled.Inputs>

          <styled.Actions>
            <Button
              text="Reset Password"
              type="submit"
              endIcon={<Icon icon="send" />}
              inProgress={isLoading}
            />
          </styled.Actions>
        </styled.Form>
      </Dialog>
    </>
  );
};
