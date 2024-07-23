import * as styled from "./styles";
import { CardProps } from "@mui/material";
import Icon from "../../UI/Icon";
import IconButton from "../../UI/IconButton";
import Input from "../../UI/input/Input";
import { useContext } from "react";
import { FilterFriendsContext } from "../../../context/friends-filter/_context";
import Button from "../../UI/button/Button";

interface ISearchFriendsBar extends CardProps {}

const SearchFriendsBar: React.FC<ISearchFriendsBar> = (props) => {
  const { ...rest } = props;

  const { state, searchFriends, resetFilters } =
    useContext(FilterFriendsContext);

  const filtred = state.searchPhraze || state.filtredFavs;

  return (
    <styled.Bar {...rest}>
      {filtred && (
        <styled.Action elevation={15}>
          <Button
            color="warning"
            text="Clear Filters"
            onClick={resetFilters}
            endIcon={<Icon icon="refresh" />}
          />
        </styled.Action>
      )}

      <Input
        size="small"
        value={state.searchPhraze}
        onClear={() => searchFriends("")}
        adornmentStart={<Icon icon="search" />}
        onChange={(e) => searchFriends(e.currentTarget.value)}
      />

      <IconButton
        icon="addFriend"
        color="secondary"
        onClick={() => console.log(state)}
      />
    </styled.Bar>
  );
};

export default SearchFriendsBar;
