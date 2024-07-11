import * as styled from "./styles";
import React, { useContext, useState } from "react";
import { CardProps, Typography } from "@mui/material";
import type { User, UserBaseInfo } from "../../../API/User";
import Placehoder from "./_Placehoder";
import IconButton from "../../UI/IconButton";
import LiftRecord from "../../shared/lift-record/LiftRecord";
import { FilterFriendsContext, Friend } from "../../../context/friends-filter";

interface IUserWidget extends CardProps {
  uid: UserBaseInfo["uid"];
}

const UserWidget: React.FC<IUserWidget> = (props) => {
  const { uid, ...rest } = props;
  const { getFriend } = useContext(FilterFriendsContext);
  const [data, setData] = useState<Friend | null | undefined>(undefined);

  return data ? (
    <styled.Container {...rest}>
      <styled.Image>
        <img src={data.details?.photoURL} />
      </styled.Image>

      <styled.Info>
        <IconButton
          size="small"
          icon={data.isFav ? "starFilled" : "starBorder"}
          iconColor={data.isFav ? "warning" : "inherit"}
        />

        <Typography variant="button">{data.base.nickname}</Typography>
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

export default UserWidget;
