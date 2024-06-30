import * as styled from "./nav-bar.styled";
import { Link } from "react-router-dom";
import Button from "../../UI/button/Button";
import Icon from "../../UI/Icon";
import useBoolean from "../../../hooks/useBoolean";
import Dialog from "../../modals/dialog/Dialog";
import LoginForm from "../forms/login-form/LoginForm";

const NavBar = () => {
  const [isModalOpen, toggleModal] = useBoolean(false);

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

      <Button
        text="Login"
        size="small"
        color="inherit"
        variant="outlined"
        startIcon={<Icon icon="login" />}
        onClick={toggleModal}
      />

      <Dialog open={isModalOpen} onClose={toggleModal} transition="slide">
        <LoginForm />
      </Dialog>
    </styled.Container>
  );
};

export default NavBar;
