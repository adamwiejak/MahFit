import * as styled from "./styles";
import { CardProps } from "@mui/material";
import Icon from "../../UI/Icon";
import IconButton from "../../UI/IconButton";
import Input from "../../UI/input/Input";
import { ChangeEvent, useContext } from "react";
import { FilterFriendsContext } from "../../../context/friends-filter/_context";

interface ISearchUsersBar extends CardProps {}

const SearchUsersBar: React.FC<ISearchUsersBar> = (props) => {
  const { ...rest } = props;
  const { searchFriends } = useContext(FilterFriendsContext);

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    searchFriends(value);
  }

  return (
    <styled.Bar {...rest}>
      <Input
        size="small"
        onClear={() => {}}
        onChange={onChangeHandler}
        adornmentStart={<Icon icon="search" />}
      />

      <IconButton icon="addFriend" />
    </styled.Bar>
  );
};

export default SearchUsersBar;
