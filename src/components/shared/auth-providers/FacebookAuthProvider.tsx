import Button, { type IButton } from "../../UI/button/Button";
import Icon from "../../UI/Icon";
import UserAPI from "../../../API/User";

interface IFacebookAuthProvider extends Omit<IButton, "text" | "icon"> {
  icon?: "end" | "start";
}

const FacebookAuthProvider: React.FC<IFacebookAuthProvider> = (props) => {
  function signInHandler() {
    UserAPI.singInWithFacebook();
  }

  return (
    <Button
      {...props}
      onClick={signInHandler}
      text="Sing In With Facebook"
      startIcon={<Icon icon="facebook" sx={{ color: "common.facebook" }} />}
    />
  );
};

export default FacebookAuthProvider;
