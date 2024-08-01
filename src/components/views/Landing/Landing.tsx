import * as config from "./config";
import * as styled from "./styled";
import { BoxProps } from "@mui/material";
import Footer from "../../blocks/footer/Footer";
import AppHeader from "../../blocks/app-bar/AppBar";
import { Outlet } from "react-router-dom";
import ScrollUp from "../../../_dev_tests/scroll-up/ScrollUp";
import useTween from "../../../hooks/useTween";
import { useRef } from "react";

const Landing: React.FC<BoxProps> = (props) => {
  const { ...rest } = props;
  const barRef = useRef<HTMLDivElement>(null);

  useTween(() => config.showHeaderTwen(barRef));
  // useTween(() => config.shrinkHeaderTwen(barRef));

  return (
    <styled.Wrapper role="Landing Layout" {...rest}>
      <AppHeader  ref={barRef} />

      <Outlet />

      <ScrollUp enterOffset={0.15} />
      <Footer />
    </styled.Wrapper>
  );
};

export default Landing;
