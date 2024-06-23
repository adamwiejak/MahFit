import * as styled from "./dashboard-layout.styled";
import { Outlet } from "react-router-dom";
import AppBar from "../../blocks/app-bar/AppBar";
import { getUserSlice } from "../../../store/Store";
import Image from "../../shared/image/Image";
import { scheduleImageAsset } from "../../../assets/images/schedule/asset";
import Footer from "../../blocks/footer/Footer";
import AuthForm from "../../blocks/auth-form/AuthForm";

const DashboardLayout = () => {
  const { accessToken } = getUserSlice();

  return (
    <styled.Wrapper>
      <AppBar position="fixed" />

      <Image
        background
        sx={{ position: "fixed" }}
        imageAsset={scheduleImageAsset}
      />

      <styled.Content>{accessToken ? <Outlet /> : <AuthForm />}</styled.Content>
      {!accessToken && <Footer />}
    </styled.Wrapper>
  );
};

export default DashboardLayout;
