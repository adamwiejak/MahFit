import * as config from "./config";
import * as styled from "./styles";
import { Divider, Typography, TypographyProps } from "@mui/material";
import { emailRegEx, required } from "../../../../helpers/data/regex";
import useAsyncTaskHandler from "../../../../hooks/useAsyncTask";
import Input from "../../../UI/input/Input";
import Icon from "../../../UI/Icon";
import useBoolean from "../../../../hooks/useBoolean";
import Dialog from "../../../modals/dialog/Dialog";
import Button from "../../../UI/button/Button";
import useForm from "../../../../hooks/useForm";

interface IRetrivePassword extends Omit<TypographyProps, "variant"> {}

export const RetrivePasswordForm: React.FC<IRetrivePassword> = (props) => {
  const { ...rest } = props;
  const { isLoading } = useAsyncTaskHandler();
  const { formState, form } = useForm<config.FormData>();

  const [retriveFormOpen, toggleRetriveFormOpen] = useBoolean(false);

  const onFormSubmit = form.handleSubmit((data) => {
    try {
      // asyncTaskHandler(UserAPI.retrivePassword(data.email));
    } catch (err: any) {
      console.log(err);
    }
  });

  return (
    <>
      <Typography
        sx={{ cursor: "pointer" }}
        color="inherit"
        variant="subtitle2"
        onClick={toggleRetriveFormOpen}
        {...rest}
      >
        Forgot Pasword ?
      </Typography>

      <Dialog
        open={retriveFormOpen}
        transition="zoom"
        onClose={toggleRetriveFormOpen}
      >
        <styled.Form component="form" onSubmit={onFormSubmit}>
          <Typography>Type your email to get restore link</Typography>
          <Divider />

          <styled.Inputs>
            <Input
              disabled={isLoading}
              label="Your Email"
              error={!!formState.errors.email?.message}
              helperText={formState.errors.email?.message}
              onClear={form.onInputClear("email")}
              {...form.register("email", { ...emailRegEx, ...required })}
            />
          </styled.Inputs>

          <styled.Actions>
            <Button
              type="submit"
              text="Reset Password"
              endIcon={<Icon icon="send" />}
              inProgress={isLoading}
            />
          </styled.Actions>
        </styled.Form>
      </Dialog>
    </>
  );
};
