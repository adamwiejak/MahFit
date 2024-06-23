import * as styled from "./styles";
import React, { useState } from "react";
import { Avatar, CardProps, Typography } from "@mui/material";
import { User, UserBaseInfo } from "../../../API/User";

interface IUserWidget extends CardProps {
  uid: UserBaseInfo["uid"];
}

const UserWidget: React.FC<IUserWidget> = (props) => {
  const { uid, ...rest } = props;
  const [userData, setUserData] = useState<User | null>(null);

  return (
    <styled.Container {...rest} elevation={10}>
      <Avatar src={userData?.details?.photoURL} />
      <styled.Info>
        <span>
          <Typography>{userData?.base.nickname}</Typography>
          <Typography>{userData?.base.email}</Typography>
        </span>

        <Typography variant="caption">{userData?.base.uid || uid}</Typography>
      </styled.Info>
    </styled.Container>
  );
};

export default UserWidget;
