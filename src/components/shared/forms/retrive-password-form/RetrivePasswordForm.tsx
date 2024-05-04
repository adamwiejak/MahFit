import styled from "./styles";
import { BoxProps, Divider, Typography } from "@mui/material";
import { emailRegEx, required } from "../../../../helpers/data/regex";
import { useForm } from "react-hook-form";
import useAsyncTaskHandler from "../../../../hooks/useAsyncTask";
import { onFormInputClear } from "../../../../helpers/functions/functions";
import UserAPI from "../../../../utils/User/user-api";
import Input from "../../../primitives/Input";
import Button, { ButtondProps } from "../../../primitives/Button";
import Icon from "../../../primitives/Icon";
import useBoolean from "../../../../hooks/useBoolean";
import Dialog from "../../../modals/dialog/Dialog";

interface IRetrivePassword extends Omit<ButtondProps, "text"> {}

interface RetrivePasswordForm {
  email: string;
}

export const RetrivePasswordForm: React.FC<IRetrivePassword> = (props) => {
  const { ...rest } = props;
  const { asyncHandler, isLoading } = useAsyncTaskHandler();
  const { formState, ...form } = useForm<RetrivePasswordForm>();

  const [retriveFormOpen, toggleRetriveFormOpen] = useBoolean(false);

  const submit = async (data: RetrivePasswordForm) => {
    try {
      asyncHandler(async () => UserAPI.retrivePassword(data.email));
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
