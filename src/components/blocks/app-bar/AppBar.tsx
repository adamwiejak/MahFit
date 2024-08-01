import React from "react";
import * as styled from "./styled";
import Logo from "../../shared/logo/Logo";
import type { AppBarProps } from "@mui/material";
import ThemeSwitcher from "../../shared/theme-switcher/ThemeSwitcher";
import UserNavBar from "../../shared/user-nav-bar/UserNavBar";

interface IAppBar extends AppBarProps {}

const AppBar = React.forwardRef<any, IAppBar>((props, ref) => {
  return (
    <styled.Bar {...props} ref={ref}>
      <Logo />

      <ThemeSwitcher />
      <UserNavBar />
    </styled.Bar>
  );
});

export default AppBar;
