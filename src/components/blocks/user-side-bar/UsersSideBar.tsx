import * as styled from "./.styles";
import { CardProps } from "@mui/material";
import FriendsList from "../../shared/friends-list/FriendsList";
import SortFriendsBar from "../../shared/sort-friends-bar/SortFriendsBar";
import SearchFriendsBar from "../../shared/search-friends-bar/SearchFriendsBar";

interface IUsersSideBar extends CardProps {}

const UsersSideBar: React.FC<IUsersSideBar> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Container {...rest}>
      <SortFriendsBar elevation={24} />
      <FriendsList />
      <SearchFriendsBar elevation={24} />
    </styled.Container>
  );
};

export default UsersSideBar;
