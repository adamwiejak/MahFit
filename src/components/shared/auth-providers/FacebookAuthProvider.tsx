import useAsyncTaskHandler from "../../../hooks/useAsyncTask";
import Button, { type IButton } from "../../UI/button/Button";
import Icon from "../../UI/Icon";
import UserAPI from "../../../API/User";

interface IFacebookAuthProvider extends Omit<IButton, "text" | "icon"> {
  icon?: "end" | "start";
}

const FacebookAuthProvider: React.FC<IFacebookAuthProvider> = (props) => {
  const { asyncTaskHandler, isLoading } = useAsyncTaskHandler();

  return (
    <Button
      {...props}
      inProgress={isLoading}
      text="Sing In With Facebook"
      onClick={UserAPI.singInWithFacebook}
      startIcon={<Icon icon="facebook" sx={{ color: "common.facebook" }} />}
    />
  );
};

export default FacebookAuthProvider;
