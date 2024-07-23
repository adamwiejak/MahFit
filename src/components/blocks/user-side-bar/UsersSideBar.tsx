import * as styled from "./styles";
import { CardProps } from "@mui/material";
import SortFriendsBar from "../../shared/sort-friends-bar/SortFriendsBar";
import SearchFriendsBar from "../../shared/search-friends-bar/SearchFriendsBar";
import FriendsList from "../../shared/friends-list/FriendsList";
import { FilterFriendsContext } from "../../../context/friends-filter";
import { useContext } from "react";
import { UserDetailsInfo } from "../../../API/User";

interface IUsersSideBar extends CardProps {
  friendsList?: UserDetailsInfo["friendsList"];
}

const UsersSideBar: React.FC<IUsersSideBar> = (props) => {
  const { friendsList = [], ...rest } = props;
  const { state, initFriends } = useContext(FilterFriendsContext);

  if (!state.filtredFriends) initFriends(friendsList);

  return (
    <styled.Container elevation={10} {...rest}>
      <SortFriendsBar elevation={10} />
      <FriendsList />
      <SearchFriendsBar elevation={20} />
    </styled.Container>
  );
};

export default UsersSideBar;
