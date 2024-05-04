import { Outlet } from "react-router-dom";
import * as styled from "./styles";
import { AppBar, Avatar, Toolbar } from "@mui/material";
import Button from "../../primitives/Button";
import Logo from "../../shared/logo/Logo";

const Dashboard = () => {
  return (
    <styled.Wrapper>
      <AppBar sx={{ justifyItems: "space-between" }}>
        <Toolbar>
          <Logo />
          <Avatar />
        </Toolbar>
      </AppBar>
      <Outlet />
    </styled.Wrapper>
  );
};

export default Dashboard;
