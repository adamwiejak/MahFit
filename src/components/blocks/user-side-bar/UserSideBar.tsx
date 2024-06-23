import { BoxProps } from "@mui/material";
import * as styled from "./styled";
import { getUserSlice } from "../../../store/Store";
import UserWidget from "../../shared/user-widget/UserWidget";

interface IUserSideBar extends BoxProps {}

const UserSideBar: React.FC<IUserSideBar> = (props) => {
  const { ...rest } = props;
  const { userData } = getUserSlice();
  const { details } = userData!;

  return (
    <styled.Container {...rest}>
      {details?.friendsList?.map(({ uid }) => (
        <UserWidget uid={uid} key={uid} />
      ))}
    </styled.Container>
  );
};

export default UserSideBar;
