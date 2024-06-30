import * as config from "./config";
import * as styled from "./styles";
import React from "react";
import Button from "../../UI/button/Button";
import Icon from "../../UI/Icon";
import UserAvatar from "../user-avatar/UserAvatar";
import { Link } from "react-router-dom";
import { BoxProps } from "@mui/material";

interface IUserNavBar extends BoxProps {}

const UserNavBar: React.FC<IUserNavBar> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Container {...rest}>
      {config.btns.map((btn) => (
        <Link to={btn.href} key={btn.href}>
          <Button color="inherit" variant="outlined">
            <Icon icon={btn.icon} />
          </Button>
        </Link>
      ))}

      <UserAvatar />
    </styled.Container>
  );
};

export default UserNavBar;
