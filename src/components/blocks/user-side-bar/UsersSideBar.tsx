import * as styled from "./styles";
import { useContext, useEffect } from "react";
import { CardProps } from "@mui/material";
import { Friend } from "../../../API/User";
import FriendsList from "../../shared/friends-list/FriendsList";
import SortFriendsBar from "../../shared/sort-friends-bar/SortFriendsBar";
import SearchFriendsBar from "../../shared/search-friends-bar/SearchFriendsBar";
import FilterFriendsContext from "../../../context/friends-filter";

interface IUsersSideBar extends CardProps {
  friendsList?: Friend[];
}

const UsersSideBar: React.FC<IUsersSideBar> = (props) => {
  const { friendsList = [], ...rest } = props;
  const { init } = useContext(FilterFriendsContext);

  useEffect(() => {
    init(friendsList);
  }, [friendsList]);

  return (
    <styled.Container elevation={10} {...rest}>
      <SortFriendsBar elevation={10} />
      <FriendsList />
      <SearchFriendsBar elevation={10} />
    </styled.Container>
  );
};

export default UsersSideBar;
