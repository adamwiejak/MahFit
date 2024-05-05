import * as styled from "./nav-bar.styled";
import { Link } from "react-router-dom";
import Button from "../../UI/button/Button";
import { getUserSlice } from "../../../store/Store";
import Icon from "../../UI/Icon";
import UserAPI from "../../../API/User";
import UserAvatar from "../user-avatar/UserAvatar";
import useRouter from "../../../hooks/useRouter";

const NavBar = () => {
  const [goToPage] = useRouter();

  const { authToken } = getUserSlice();

  return (
    <styled.Container>
      {!authToken && (
        <>
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
        </>
      )}

      {authToken && (
        <>
          <Button
            size="large"
            color="inherit"
            variant="outlined"
            onClick={() => goToPage("/app")}
          >
            <Icon icon="dashboard" fontSize="small" />
          </Button>

          <Button
            size="large"
            color="inherit"
            variant="outlined"
            onClick={UserAPI.logoutUser}
          >
            <Icon icon="logout" fontSize="small" />
          </Button>

          <UserAvatar />
        </>
      )}
    </styled.Container>
  );
};

export default NavBar;
