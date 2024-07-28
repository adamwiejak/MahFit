import * as styled from "./styles";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CardProps, Typography } from "@mui/material";
import type { Uid } from "../../../API/User";
import Placehoder from "./_Placehoder";
import IconButton from "../../UI/IconButton";
import LiftRecord from "../lift-record/LiftRecord";
import FilterFriendsContext from "../../../context/friends-filter";
import UserAPI from "../../../API/User";
import { TaskError } from "../../../classes/TaskError";
import { FriendUser } from "../../../classes/FriendUser";

type Data = FriendUser | null | undefined;

interface IFriendWidget extends CardProps {
  uid: Uid;
}

const FriendWidget: React.FC<IFriendWidget> = (props) => {
  const { uid, ...rest } = props;
  const [friend, setFriendUser] = useState<Data>(undefined);
  const { state, getFriend, setFriend } = useContext(FilterFriendsContext);

  const fetchFriendData = useRef(async function () {
    try {
      const userData = await UserAPI.getUser(uid);
      if (!userData) throw new TaskError(new Error(`User ${uid} not exist`));
      setFriend(userData);
    } catch (err) {
      setFriendUser(null);
      const { displaySnackbar } = err as TaskError;
      displaySnackbar("warning");
    }
  });

  if (friend === undefined) fetchFriendData.current();
  useEffect(() => setFriendUser(getFriend(uid)), [state.friends]);

  return friend ? (
    <styled.Container elevation={10} {...rest}>
      <styled.Image elevation={20}>
        <img src={friend.getPhotoUrl()} />
      </styled.Image>

      <styled.Info>
        <IconButton
          size="small"
          icon={friend.isFav ? "starFilled" : "starBorder"}
          iconColor={friend.isFav ? "warning" : "inherit"}
        />
        <Typography
          variant="button"
          sx={{ cursor: "pointer" }}
          onClick={() => console.log(friend)}
        >
          {friend.getNickname()}
        </Typography>
      </styled.Info>

      <styled.Records>
        <LiftRecord value={friend.getRecords().deadLift} type="deadLift" />
        <LiftRecord value={friend.getRecords().squat} type="squat" />
        <LiftRecord value={friend.getRecords().benchPress} type="benchPress" />
      </styled.Records>

      <styled.Actions elevation={20}>
        <IconButton size="small" icon="removeFriend" />
        <IconButton size="small" icon="dotsVertical" />
      </styled.Actions>
    </styled.Container>
  ) : (
    <Placehoder
      onClick={() => console.log(state, friend)}
      isLoading={friend === undefined}
      uid={uid}
    />
  );
};

export default FriendWidget;
