import useAsyncTaskHandler from "../../../hooks/useAsyncTask";
import UserAPI from "../../../utils/User/user-api";
import Button from "../../primitives/Button";
import type { ButtonProps } from "@mui/material";
import Icon from "../../primitives/Icon";

const FacebookAuthProvider: React.FC<Omit<ButtonProps, "text">> = (props) => {
  const { asyncHandler, isLoading } = useAsyncTaskHandler();

  return (
    <Button
      {...props}
      text="Sing In With Facebook"
      inProgress={isLoading}
      onClick={() => asyncHandler(UserAPI.singInWithFacebook)}
      startIcon={<Icon icon="facebook" sx={{ color: "common.facebook" }} />}
    />
  );
};

export default FacebookAuthProvider;
