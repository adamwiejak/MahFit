import Icon from "../../UI/Icon";
import * as styled from "./styles";
import { useContext } from "react";
import Input from "../../UI/input/Input";
import { CardProps } from "@mui/material";
import Button from "../../UI/button/Button";
import IconButton from "../../UI/IconButton";
import FilterFriendsContext from "../../../context/friends-filter/_context";

interface ISearchFriendsBar extends CardProps {}

const SearchFriendsBar: React.FC<ISearchFriendsBar> = (props) => {
  const { ...rest } = props;

  const { state, searchFriends, resetFilters } =
    useContext(FilterFriendsContext);

  const filtred = !!state.search || state.filtredFavs;

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
        value={state.search}
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
