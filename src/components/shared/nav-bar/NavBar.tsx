import * as styled from "./nav-bar.styled";
import { Link } from "react-router-dom";
import Button from "../../primitives/Button";

const NavBar = () => {
  return (
    <styled.Container>
      <styled.Box>
        <Link to="/auth/login">
          <Button variant="text" color="inherit" size="large" text="Login" />
        </Link>

        <Link to="/auth/signup">
          <Button
            size="large"
            color="secondary"
            variant="contained"
            text="Create Free Account"
          />
        </Link>
      </styled.Box>
    </styled.Container>
  );
};

export default NavBar;
