import * as styled from "./styled";
import { BoxProps } from "@mui/material";
import Footer from "../../blocks/footer/Footer";
import AppHeader from "../../blocks/app-header/AppHeader";
import { Outlet } from "react-router-dom";
import ScrollUp from "../../../_dev_tests/scroll-up/ScrollUp";

const LandingLayout: React.FC<BoxProps> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Wrapper role="Landing Layout" {...rest}>
      <AppHeader />

      <Outlet />

      <ScrollUp enterOffset={0.15} />
      <Footer />
    </styled.Wrapper>
  );
};

export default LandingLayout;
