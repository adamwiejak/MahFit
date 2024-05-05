import * as styled from "./dashboard-layout.styled";
import { Outlet } from "react-router-dom";
import AppBar from "../../blocks/app-bar/AppBar";
import AuthForm from "../../blocks/auth-form/AuthForm";
import { getUserSlice } from "../../../store/Store";
import Image from "../../shared/image/Image";
import { scheduleImageAsset } from "../../../assets/images/schedule/asset";
import Footer from "../../blocks/footer/Footer";

const DashboardLayout = () => {
  const { authToken } = getUserSlice();

  return (
    <styled.Wrapper>
      <Image
        background
        imageAsset={scheduleImageAsset}
        sx={{ position: "fixed" }}
      />

      <AppBar position="fixed" />

      <styled.Content>
        {authToken ? <Outlet /> : <AuthForm sx={{ placeSelf: "center" }} />}
      </styled.Content>

      {!authToken && <Footer />}
    </styled.Wrapper>
  );
};

export default DashboardLayout;
