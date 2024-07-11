import * as styled from "./styles";
import { Navigate } from "react-router-dom";
import { getUserSlice } from "../../../store";
import UserSideBar from "../../blocks/users-side-bar/UsersSideBar";
import AppHeader from "../../blocks/app-bar/AppBar";
import UserTabs from "../../shared/user-tabs/UserTabs";
import FilterFriendsContextProvider from "../../../context/friends-filter";

const Dashboard = () => {
  const { accessToken } = getUserSlice();

  return (
    <FilterFriendsContextProvider>
      <styled.Wrapper>
        <AppHeader position="static" sx={{ gridArea: "bar" }} />

        <UserSideBar sx={{ gridArea: "side" }} />

        <styled.Content>
          {accessToken ? <UserTabs /> : <Navigate to="/auth" />}
        </styled.Content>
      </styled.Wrapper>
    </FilterFriendsContextProvider>
  );
};

export default Dashboard;
