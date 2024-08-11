import * as styled from "./.styles";
import Logo from "../../shared/logo/Logo";
import Button from "../../UI/button/Button";
import Icon from "../../UI/Icon";
import ThemeSwitcher from "../../shared/theme-switcher/ThemeSwitcher";
import { Link } from "react-router-dom";
import { getUserSlice } from "../../../store";
import UserAvatar from "../../shared/user-avatar/UserAvatar";

const TopBar: React.FC = (props) => {
  const { accessToken } = getUserSlice();

  return (
    <styled.Bar {...props}>
      <Logo />
      <ThemeSwitcher />

      <styled.Actions>
        <Link to="/auth">
          <Button startIcon={<Icon icon="login" />} color="secondary" text="Login" />
        </Link>
        <Link to="/auth/signup">
          <Button startIcon={<Icon icon="user" />} variant="outlined" text="Create Account" />
        </Link>

        <UserAvatar />
      </styled.Actions>
    </styled.Bar>
  );
};

export default TopBar;
