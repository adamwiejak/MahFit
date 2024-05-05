import * as styled from "./app-header.styled";
import * as config from "./config";
import { useRef } from "react";
import Logo from "../../shared/logo/Logo";
import ThemeSwitcher from "../../shared/theme-switcher/ThemeSwitcher";
import type { AppBarProps } from "@mui/material";
import NavBar from "../../shared/nav-bar/NavBar";
import useTween from "../../../hooks/useTween";
import SectionSkipper from "../../shared/section-skipper/SectionSkipper";

const Header: React.FC<AppBarProps> = (props) => {
  const barRef = useRef<HTMLDivElement>(null);

  useTween(() => config.shrinkHeaderTwen(barRef));
  useTween(() => config.showHeaderTwen(barRef));

  return (
    <styled.Bar {...props} ref={barRef}>
      <Logo />
      <ThemeSwitcher />
      <SectionSkipper />
      <NavBar />
    </styled.Bar>
  );
};

export default Header;
