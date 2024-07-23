import * as styled from "./styles";
import { Navigate } from "react-router-dom";
import { getUserSlice } from "../../../store";
import AppHeader from "../../blocks/app-bar/AppBar";
import UserTabs from "../../shared/user-tabs/UserTabs";
import UsersSideBar from "../../blocks/user-side-bar/UsersSideBar";
import FilterFriendsContextProvider from "../../../context/friends-filter";

const Dashboard = () => {
  const { accessToken, userData } = getUserSlice();

  return (
    <styled.Wrapper>
      <AppHeader position="static" sx={{ gridArea: "bar" }} />

      <FilterFriendsContextProvider>
        <UsersSideBar
          sx={{ gridArea: "side" }}
          friendsList={userData?.details?.friendsList}
        />

        <styled.Content>
          {accessToken ? <UserTabs /> : <Navigate to="/auth" />}
        </styled.Content>
      </FilterFriendsContextProvider>
    </styled.Wrapper>
  );
};

export default Dashboard;
