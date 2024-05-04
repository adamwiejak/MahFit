import * as styled from "./styled";
import { BoxProps } from "@mui/material";
import Footer from "../../blocks/footer/Footer";
import Header from "../../blocks/app-header/AppHeader";
import { Outlet, useLocation } from "react-router-dom";
import ScrollUp from "../../../_dev_tests/components/scroll-up/ScrollUp";

const LandingLayout: React.FC<BoxProps> = (props) => {
  const { ...rest } = props;
  const { pathname } = useLocation();

  return (
    <styled.Wrapper role="Landing Layout" {...rest}>
      <Header />

      <Outlet />

      {/* {pathname === "/home" && <SideBar />} */}
      <ScrollUp enterOffset={0.15} />
      <Footer />
    </styled.Wrapper>
  );
};

export default LandingLayout;
