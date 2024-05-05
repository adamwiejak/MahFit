import { AppBarProps, Avatar, Toolbar } from "@mui/material";
import Logo from "../../shared/logo/Logo";
import * as styled from "./app-bar.styled";
import React from "react";
import ThemeSwitcher from "../../shared/theme-switcher/ThemeSwitcher";

interface IAppBar extends AppBarProps {}

const AppBar: React.FC<IAppBar> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Container {...rest} sx={{ justifyItems: "space-between" }}>
      <Toolbar>
        <Logo />
        <ThemeSwitcher />
      </Toolbar>

      <Avatar />
    </styled.Container>
  );
};

export default AppBar;
