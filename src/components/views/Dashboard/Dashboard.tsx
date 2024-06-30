import * as styled from "./styles";
import { Navigate, Outlet } from "react-router-dom";
import { getUserSlice } from "../../../store/Store";
import Image from "../../shared/image/Image";
import { scheduleImageAsset } from "../../../assets/images/schedule/asset";
import UserSideBar from "../../blocks/user-side-bar/UserSideBar";
import AppHeader from "../../blocks/app-bar/AppBar";
import Button from "../../UI/button/Button";

const Dashboard = () => {
  const { accessToken } = getUserSlice();

  return (
    <styled.Wrapper>
      <AppHeader position="static" sx={{ gridArea: "bar" }} />

      <Image
        background
        sx={{ position: "fixed" }}
        imageAsset={scheduleImageAsset}
      />

      <UserSideBar sx={{ gridArea: "side" }} />

      <styled.Content>
        {accessToken ? (
          <>
            <span>
              <Button text="home" />
              <Button text="workouts" />
              <Button text="invaild" />
            </span>
            <Outlet />
          </>
        ) : (
          <Navigate to="/auth" />
        )}
      </styled.Content>
    </styled.Wrapper>
  );
};

export default Dashboard;
