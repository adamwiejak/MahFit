import UserAPI from "../../../API/User";
import useAsyncTaskHandler from "../../../hooks/useAsyncTask";
import Button, { IButton } from "../../UI/button/Button";
import Icon from "../../UI/Icon";

const GoogleAuthProvider: React.FC<Omit<IButton, "text">> = (props) => {
  const { asyncTaskHandler, isLoading } = useAsyncTaskHandler();

  const onGoogleAuthentication = async () => {
    const response = await asyncTaskHandler(UserAPI.singInWithGoogle);
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
