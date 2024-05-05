import * as styled from "./app-bar.styled";
import { AppBarProps, Toolbar } from "@mui/material";
import Logo from "../../shared/logo/Logo";
import React from "react";
import ThemeSwitcher from "../../shared/theme-switcher/ThemeSwitcher";
import UserAvatar from "../../shared/user-avatar/UserAvatar";
import UserNavBar from "../../shared/user-nav-bar/UserNavBar";

interface IAppBar extends AppBarProps {}

const AppBar: React.FC<IAppBar> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Container {...rest} sx={{ justifyItems: "space-between" }}>
      <styled.Toolbar>
        <Logo />
        <ThemeSwitcher />
      </styled.Toolbar>

      <styled.Toolbar>
        <UserNavBar />
        <UserAvatar />
      </styled.Toolbar>
    </styled.Container>
  );
};

export default AppBar;
