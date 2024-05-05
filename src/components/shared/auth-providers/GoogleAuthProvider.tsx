import UserAPI from "../../../API/User";
import useAsyncTaskHandler from "../../../hooks/useAsyncTask";
import Button, { ButtondProps } from "../../primitives/Button";
import Icon from "../../primitives/Icon";

const GoogleAuthProvider: React.FC<Omit<ButtondProps, "text">> = (props) => {
  const { asyncHandler, isLoading } = useAsyncTaskHandler();

  const onGoogleAuthentication = async () => {
    const response = await asyncHandler(UserAPI.singInWithGoogle);
  };

  return (
    <Button
      {...props}
      text="Sing In With Google"
      inProgress={isLoading}
      onClick={onGoogleAuthentication}
      startIcon={<Icon icon="google" sx={{ color: "common.google" }} />}
    />
  );
};

export default GoogleAuthProvider;
