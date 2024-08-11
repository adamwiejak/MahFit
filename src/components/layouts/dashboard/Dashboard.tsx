import * as styled from "./.styles";
import { getUserSlice } from "../../../store";
import UserTabs from "../../shared/user-tabs/UserTabs";
import UsersSideBar from "../../blocks/user-side-bar/UsersSideBar";
import { FilterFriendsContextProvider } from "../../../context/friends-filter";
import Logo from "../../shared/logo/Logo";
import ThemeSwitcher from "../../shared/theme-switcher/ThemeSwitcher";
import UserNavBar from "../../shared/user-nav-bar/UserNavBar";

const Dashboard = () => {
  const { userData } = getUserSlice();

  return (
    <styled.Wrapper>
      <styled.Bar position="static" sx={{ gridArea: "header" }}>
        <Logo />
        <ThemeSwitcher />
        <UserNavBar />
      </styled.Bar>

      <FilterFriendsContextProvider friendsList={userData?.details?.friendsList}>
        <UsersSideBar sx={{ gridArea: "side" }} />
        <UserTabs sx={{ gridArea: "main" }} />
      </FilterFriendsContextProvider>
    </styled.Wrapper>
  );
};

export default Dashboard;
