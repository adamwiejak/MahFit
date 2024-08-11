import * as styled from "./.styles";
import { BoxProps } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../../blocks/footer/Footer";
import TopBar from "../../blocks/top-bar/TopBar";
import ScrollUp from "../../../_dev_tests/scroll-up/ScrollUp";

const Landing: React.FC<BoxProps> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Layout {...rest}>
      <TopBar />
      <Outlet />
      <Footer />
      <ScrollUp enterOffset={0.15} />
    </styled.Layout>
  );
};

export default Landing;
