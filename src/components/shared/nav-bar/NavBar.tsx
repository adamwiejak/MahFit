import * as styled from "./nav-bar.styled";
import { Link } from "react-router-dom";
import Button from "../../UI/button/Button";
import Icon from "../../UI/Icon";

const NavBar = () => {
  return (
    <styled.Container>
      <Link to="/auth/signup">
        <Button
          color="secondary"
          variant="contained"
          text="Create Free Account"
          startIcon={<Icon icon="user" />}
        />
      </Link>

      <Link to="/auth/login">
        <Button
          text="Login"
          size="small"
          color="inherit"
          variant="outlined"
          startIcon={<Icon icon="login" />}
        />
      </Link>
    </styled.Container>
  );
};

export default NavBar;
