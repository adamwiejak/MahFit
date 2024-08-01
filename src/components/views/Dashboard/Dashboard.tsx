import * as styled from "./styles";
import { getUserSlice } from "../../../store";
import AppHeader from "../../blocks/app-bar/AppBar";
import UserTabs from "../../shared/user-tabs/UserTabs";
import UsersSideBar from "../../blocks/user-side-bar/UsersSideBar";
import { FilterFriendsContextProvider } from "../../../context/friends-filter";

const Dashboard = () => {
  const { accessToken, userData } = getUserSlice();

  return (
    <styled.Wrapper>
      <AppHeader position="static" sx={{ gridArea: "header" }} />

      <FilterFriendsContextProvider>
        {accessToken && (
          <UsersSideBar
            sx={{ gridArea: "side" }}
            friendsList={userData?.details?.friendsList}
          />
        )}

        <UserTabs sx={{ gridArea: "main" }} disabeled={!accessToken} />
      </FilterFriendsContextProvider>
    </styled.Wrapper>
  );
};

export default Dashboard;
