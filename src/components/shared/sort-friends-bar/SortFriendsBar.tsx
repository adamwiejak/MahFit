import * as styled from "./.styles";
import Icon from "../../UI/Icon";
import * as config from "./config";
import { useContext } from "react";
import { Lift } from "../../../API/User";
import IconButton from "../../UI/IconButton";
import type { CardProps } from "@mui/material";
import FilterFriendsContext from "../../../context/friends-filter";

interface ISortFriendsBar extends CardProps {}

const SortFriendsBar: React.FC<ISortFriendsBar> = (props) => {
  const { ...rest } = props;

  const { toggleFilterFavs, sortFriends, state } = useContext(FilterFriendsContext);

  const order = state.sorted?.order;
  const emptySearch = !state.friends || (state.filtredFriends?.length || 0) < 2;

  return (
    <styled.Bar {...rest}>
      {config.btns.map((icon) => {
        const currLiftSort = icon === state.sorted?.lift && !emptySearch;

        return (
          <styled.Btn key={icon}>
            <IconButton
              icon={icon}
              size="small"
              onClick={() => sortFriends(icon as Lift)}
              color={currLiftSort ? "inherit" : "default"}
            />
            {currLiftSort && order && (
              <Icon icon={order} fontSize="small" color={order === "sortDown" ? "error" : "success"} />
            )}
          </styled.Btn>
        );
      })}

      <IconButton
        sx={{ ml: 4 }}
        color="warning"
        onClick={toggleFilterFavs}
        icon={state.filtredFavs ? "starFilled" : "starBorder"}
      />
    </styled.Bar>
  );
};

export default SortFriendsBar;
