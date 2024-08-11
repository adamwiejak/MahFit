import * as styled from "./.styles";
import { useContext } from "react";
import FilterFriendsContext from "../../../context/friends-filter";
import Button from "../../UI/button/Button";
import Icon from "../../UI/Icon";

const FeedbackCard = () => {
  const {
    state: { filtredFriends, friends, isLoading },
  } = useContext(FilterFriendsContext);

  const noFriends = !friends;
  const emptySearch = !noFriends && !filtredFriends?.length;

  const showed = noFriends || emptySearch;

  return showed ? (
    <styled.Card elevation={24}>
      <styled.Header variant="h6">No Resoults</styled.Header>

      <styled.Header color="gray" variant="body2">
        {noFriends && "You Have No Friends Yet"}
        {emptySearch && "No Friend Match Filtering Reguirements"}
      </styled.Header>

      {noFriends && (
        <Button
          size="large"
          color="secondary"
          variant="outlined"
          text="Search Some Friends ..."
          endIcon={<Icon icon="group" />}
        />
      )}
    </styled.Card>
  ) : null;
};

export default FeedbackCard;
