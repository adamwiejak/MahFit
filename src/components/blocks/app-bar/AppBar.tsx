import React from "react";
import * as styled from "./styled";
import Logo from "../../shared/logo/Logo";
import ThemeSwitcher from "../../shared/theme-switcher/ThemeSwitcher";
import { Typography, type AppBarProps } from "@mui/material";
import NavBar from "../../shared/nav-bar/NavBar";
import { getUserSlice } from "../../../store";
import UserNavBar from "../../shared/user-nav-bar/UserNavBar";

const AppBar = React.forwardRef<any, AppBarProps>((props, ref) => {
  const { accessToken, userData } = getUserSlice();

  return (
    <styled.Bar {...props} ref={ref}>
      <Logo />
      <ThemeSwitcher />

      <Typography>{userData?.base.nickname}</Typography>
      <Typography>{userData?.base.gender}</Typography>

      {accessToken ? <UserNavBar /> : <NavBar />}
    </styled.Bar>
  );
});

export default AppBar;
