import * as styled from "./styles";
import { BoxProps } from "@mui/material";
import React, { useContext } from "react";
import FriendWidget from "../friend-widget/FriendWidget";
import FilterFriendsContext from "../../../context/friends-filter";
import Button from "../../UI/button/Button";
import Icon from "../../UI/Icon";

interface IFriendsList extends BoxProps {}

const FriendsList: React.FC<IFriendsList> = (props) => {
  const { ...rest } = props;

  const {
    state: { filtredFriends, friends },
  } = useContext(FilterFriendsContext);

  const noFriends = !friends && filtredFriends;
  const emptySearch = !filtredFriends?.length && !noFriends;

  return (
    <styled.FriendsList {...rest}>
      {(noFriends || emptySearch) && (
        <>
          <styled.Header variant="body1">No Resoults...</styled.Header>

          <styled.Header color="gray" variant="body2">
            {noFriends && "You Have No Friends Yet"}
            {emptySearch && "No Friend Match Filtering Reguirements"}
          </styled.Header>

          {noFriends && (
            <Button
              size="large"
              sx={{ mt: 5 }}
              color="secondary"
              variant="outlined"
              text="Search Some Friends ..."
              endIcon={<Icon icon="group" />}
            />
          )}
        </>
      )}

      {filtredFriends?.map(({ uid }) => (
        <FriendWidget key={uid} uid={uid} />
      ))}
    </styled.FriendsList>
  );
};

export default FriendsList;
