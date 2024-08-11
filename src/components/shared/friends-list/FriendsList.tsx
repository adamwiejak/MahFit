import * as styled from "./.styles";
import { BoxProps } from "@mui/material";
import React, { useContext } from "react";
import FriendWidget from "../friend-widget/FriendWidget";
import FilterFriendsContext from "../../../context/friends-filter";
import FeedbackCard from "./_FeedbackCard";

interface IFriendsList extends BoxProps {}

const FriendsList: React.FC<IFriendsList> = (props) => {
  const { ...rest } = props;
  const { state } = useContext(FilterFriendsContext);

  return (
    <styled.FriendsList {...rest}>
      <FeedbackCard />

      {state.filtredFriends?.map(({ uid }) => (
        <FriendWidget key={uid} uid={uid} />
      ))}
    </styled.FriendsList>
  );
};

export default FriendsList;
