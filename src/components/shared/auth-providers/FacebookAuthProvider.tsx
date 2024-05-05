import useAsyncTaskHandler from "../../../hooks/useAsyncTask";
import Button from "../../UI/button/Button";
import type { ButtonProps } from "@mui/material";
import Icon from "../../UI/Icon";
import UserAPI from "../../../API/User";

const FacebookAuthProvider: React.FC<Omit<ButtonProps, "text">> = (props) => {
  const { asyncTaskHandler, isLoading } = useAsyncTaskHandler();

  return (
    <Button
      {...props}
      text="Sing In With Facebook"
      inProgress={isLoading}
      onClick={() => asyncTaskHandler(UserAPI.singInWithFacebook)}
      startIcon={<Icon icon="facebook" sx={{ color: "common.facebook" }} />}
    />
  );
};

export default FacebookAuthProvider;
