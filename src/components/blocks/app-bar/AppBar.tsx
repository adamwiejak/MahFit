import React from "react";
import * as styled from "./styled";
import Logo from "../../shared/logo/Logo";
import ThemeSwitcher from "../../shared/theme-switcher/ThemeSwitcher";
import { Typography, type AppBarProps } from "@mui/material";
import NavBar from "../../shared/nav-bar/NavBar";
import SectionSkipper from "../../shared/section-skipper/SectionSkipper";
import { getUserSlice } from "../../../store";
import UserNavBar from "../../shared/user-nav-bar/UserNavBar";
import { useLocation } from "react-router-dom";

const AppBar = React.forwardRef<any, AppBarProps>((props, ref) => {
  const { accessToken, userData } = getUserSlice();
  const { pathname } = useLocation();

  return (
    <styled.Bar {...props} ref={ref}>
      <Logo />
      <ThemeSwitcher />
      {pathname === "/home" && <SectionSkipper />}

      <Typography>{userData?.base.nickname}</Typography>

      {accessToken ? <UserNavBar /> : <NavBar />}
    </styled.Bar>
  );
});

export default AppBar;
