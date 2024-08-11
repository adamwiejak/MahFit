import * as styled from "./.styles";
import React, { useContext, useEffect, useState } from "react";
import Placehoder from "./_Placehoder";
import UserAPI from "../../../API/User";
import type { Uid } from "../../../API/User";
import IconButton from "../../UI/IconButton";
import { CardProps, Typography } from "@mui/material";
import FilterFriendsContext from "../../../context/friends-filter";
import { FriendUser } from "../../../classes/FriendUser";
import FriendWidgetActions from "../friend-widget-actions/FriendWidgetActions";
import RecordsBox from "../records-box/RecordsBox";
import LocalStorageAPI from "../../../API/LocalStorage";

interface IFriendWidget extends CardProps {
  uid: Uid;
}

const FriendWidget: React.FC<IFriendWidget> = (props) => {
  const { uid, ...rest } = props;
  const { state, getFriend, setFriend } = useContext(FilterFriendsContext);
  const [friend, setFriendUser] = useState<FriendUser | null | undefined>(getFriend(uid));

  async function fetchFriendData() {
    const { getCachedFriend, setCachedFriend } = LocalStorageAPI;
    try {
      const isFav = !!state.filtredFriends?.find((f) => f.uid === uid)?.isFav;
      const friendData = getCachedFriend(uid) || (await UserAPI.getUserData(uid));
      if (!friendData) throw new Error(`User ${uid} not exist`);
      setFriendUser(new FriendUser(friendData, isFav));
      setCachedFriend(friendData);
    } catch (err: any) {
      setFriendUser(null);
    }
  }

  function checkoutFriend() {
    console.log(friend?.getUserData());
  }

  if (friend === undefined) fetchFriendData();

  useEffect(() => {
    if (friend instanceof FriendUser) setFriend(friend);
  }, [friend]);

  return friend ? (
    <styled.Container elevation={10} {...rest}>
      <styled.Image elevation={20}>
        <img src={friend.getBaseInfo().photoURL} />
      </styled.Image>

      <styled.Info>
        <IconButton
          size="small"
          icon={friend.isFav() ? "starFilled" : "starBorder"}
          iconColor={friend.isFav() ? "warning" : "inherit"}
        />
        <Typography variant="button" onClick={checkoutFriend}>
          {friend.getBaseInfo().nickname}
        </Typography>
      </styled.Info>

      <RecordsBox records={friend.getRecords()} />

      <FriendWidgetActions elevation={20} uid={friend.getUid()} />
    </styled.Container>
  ) : (
    <Placehoder isLoading={friend === undefined} uid={uid} />
  );
};

export default FriendWidget;
