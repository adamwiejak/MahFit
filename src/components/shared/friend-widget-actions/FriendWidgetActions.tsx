import { CardProps } from "@mui/material";
import IconButton from "../../UI/IconButton";
import * as styled from "./.styles";
import { Uid } from "../../../API/User";

interface IFriendWidgetActions extends CardProps {
  uid: Uid;
}

const FriendWidgetActions: React.FC<IFriendWidgetActions> = (props) => {
  const { uid, ...rest } = props;

  return (
    <styled.Actions {...rest}>
      <IconButton size="small" icon="removeFriend" />
      <IconButton size="small" icon="dotsVertical" />
    </styled.Actions>
  );
};

export default FriendWidgetActions;
