import * as styled from "./styles";
import { BoxProps, Typography } from "@mui/material";
import React, { useContext } from "react";
import UserWidget from "../user-widget/UserWidget";
import { FilterFriendsContext } from "../../../context/friends-filter";
import { getUserSlice } from "../../../store";

interface IUsersList extends BoxProps {}

const UsersList: React.FC<IUsersList> = (props) => {
  const { ...rest } = props;
  const { userData } = getUserSlice();

  const {
    state: { friendsList },
    setFriendsList,
  } = useContext(FilterFriendsContext);

  if (!friendsList) {
    setFriendsList(userData?.details?.friendsList || []);
  }

  return (
    <styled.UsersList {...rest}>
      {friendsList?.map(({ uid }) => (
        <UserWidget key={uid} uid={uid} />
      ))}

      {!friendsList?.length && (
        <Typography>Have No Friends, You Loser</Typography>
      )}
    </styled.UsersList>
  );
};

export default UsersList;
