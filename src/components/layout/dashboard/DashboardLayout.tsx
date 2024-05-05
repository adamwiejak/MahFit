import * as styled from "./dashboard-layout.styled";
import { Outlet } from "react-router-dom";
import AppBar from "../../blocks/app-bar/AppBar";
import AuthForm from "../../blocks/auth-form/AuthForm";
import UserAPI from "../../../API/User";

const DashboardLayout = () => {
  const currUser = UserAPI.getCurrentUser();

  return (
    <styled.Wrapper>
      <AppBar position="static" />

      <styled.Content>
        {currUser && <Outlet />}
        {!currUser && <AuthForm sx={{ placeSelf: "center" }} />}
      </styled.Content>
    </styled.Wrapper>
  );
};

export default DashboardLayout;
