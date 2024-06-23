import * as styled from "./app-bar.styled";
import { AppBarProps, Typography } from "@mui/material";
import Logo from "../../shared/logo/Logo";
import React from "react";
import ThemeSwitcher from "../../shared/theme-switcher/ThemeSwitcher";
import UserAvatar from "../../shared/user-avatar/UserAvatar";
import UserNavBar from "../../shared/user-nav-bar/UserNavBar";
import { getUserSlice } from "../../../store/Store";
import NavBar from "../../shared/nav-bar/NavBar";

interface IAppBar extends AppBarProps {}

const AppBar: React.FC<IAppBar> = (props) => {
  const { ...rest } = props;
  const { userData, accessToken } = getUserSlice();

  return (
    <styled.Container {...rest} sx={{ justifyItems: "space-between" }}>
      <styled.Toolbar>
        <Logo />
        <ThemeSwitcher />
        <Typography>{userData?.base.nickname}</Typography>
      </styled.Toolbar>

      {accessToken ? (
        <styled.Toolbar>
          <UserNavBar />
          <UserAvatar />
        </styled.Toolbar>
      ) : (
        <styled.Toolbar>
          <NavBar />
        </styled.Toolbar>
      )}
    </styled.Container>
  );
};

export default AppBar;
