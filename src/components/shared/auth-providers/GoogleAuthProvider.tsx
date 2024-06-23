import UserAPI from "../../../API/User";
import Button, { IButton } from "../../UI/button/Button";
import Icon from "../../UI/Icon";

interface IGoogleAuthProvider extends Omit<IButton, "text" | "icon"> {}

const GoogleAuthProvider: React.FC<IGoogleAuthProvider> = (props) => {
  function signInHandler() {
    UserAPI.singInWithGoogle();
  }

  return (
    <Button
      {...props}
      text="Sing In With Google"
      onClick={signInHandler}
      startIcon={<Icon icon="google" sx={{ color: "common.google" }} />}
    />
  );
};

export default GoogleAuthProvider;
