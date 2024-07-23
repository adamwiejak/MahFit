import * as styled from "./styles";
import React, { useContext, useState } from "react";
import { CardProps, Typography } from "@mui/material";
import type { UserBaseInfo } from "../../../API/User";
import Placehoder from "./_Placehoder";
import IconButton from "../../UI/IconButton";
import LiftRecord from "../lift-record/LiftRecord";
import { FilterFriendsContext, Friend } from "../../../context/friends-filter";
import UserAPI from "../../../API/User";
import { fillDummyUser } from "../../../helpers/functions/dummy-data";
import { TaskError } from "../../../classes/TaskError";

interface IFriendWidget extends CardProps {
  uid: UserBaseInfo["uid"];
}

type Data = Friend | null | undefined;

const FriendWidget: React.FC<IFriendWidget> = (props) => {
  const { uid, ...rest } = props;
  const { state, getFriendData, setFriend } = useContext(FilterFriendsContext);
  const [data, setData] = useState<Data>(getFriendData(uid));

  async function fetchFriend() {
    const { filtredFriends } = state;
    const isFav = !!filtredFriends?.find((f) => f.uid === uid)?.isFav;

    try {
      const userData = await UserAPI.getUserData(uid);
      if (!userData) throw new TaskError(new Error(`User ${uid} not exist`));
      if (userData.isDummy) await fillDummyUser(userData);
      const friend = { uid, isFav, data: userData };
      setFriend(friend);
      setData(friend);
    } catch (err) {
      const { displaySnackbar } = err as TaskError;
      displaySnackbar("warning");
      setData(null);
    }
  }

  if (data === undefined) fetchFriend();

  return data ? (
    <styled.Container {...rest}>
      <styled.Image>
        <img src={data.data?.details?.photoURL} />
      </styled.Image>

      <styled.Info>
        <IconButton
          size="small"
          icon={data.isFav ? "starFilled" : "starBorder"}
          iconColor={data.isFav ? "warning" : "inherit"}
        />
        <Typography
          variant="button"
          sx={{ cursor: "pointer" }}
          onClick={() => console.log(data)}
        >
          {data.data?.base.nickname}
        </Typography>
      </styled.Info>

      <styled.Records>
        <LiftRecord value={200} type="deadLift" />
        <LiftRecord value={170} type="squat" />
        <LiftRecord value={145} type="benchPress" />
      </styled.Records>

      <styled.Actions>
        <IconButton size="small" icon="removeFriend" />
        <IconButton size="small" icon="dotsVertical" />
      </styled.Actions>
    </styled.Container>
  ) : (
    <Placehoder isLoading={data === undefined} uid={uid} />
  );
};

export default FriendWidget;
