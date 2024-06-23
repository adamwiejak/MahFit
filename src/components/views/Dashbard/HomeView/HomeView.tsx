import { getUserSlice } from "../../../../store/Store";
import UserSideBar from "../../../blocks/user-side-bar/UserSideBar";
import * as styled from "./home-view.styled";

const HomeView = () => {
  const { userData } = getUserSlice();

  return (
    <styled.Page>
      <UserSideBar />
      <styled.Main>{JSON.stringify(userData)}</styled.Main>
    </styled.Page>
  );
};

export default HomeView;
