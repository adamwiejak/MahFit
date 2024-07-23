import * as styled from "./styles";
import * as config from "./config";
import IconButton from "../../UI/IconButton";
import Icon from "../../UI/Icon";
import { CardProps } from "@mui/material";
import { useContext } from "react";
import { FilterFriendsContext } from "../../../context/friends-filter";

interface ISortFriendsBar extends CardProps {}

const SortFriendsBar: React.FC<ISortFriendsBar> = (props) => {
  const { ...rest } = props;
  const { toggleFilterFavs, state } = useContext(FilterFriendsContext);

  return (
    <styled.Bar {...rest}>
      {config.btns.map((icon) => (
        <styled.Btn key={icon}>
          <Icon icon={icon} fontSize="small" />
          <IconButton icon="sortUp" size="small" />
        </styled.Btn>
      ))}

      <IconButton
        onClick={toggleFilterFavs}
        color={state.filtredFavs ? "warning" : "default"}
        icon={state.filtredFavs ? "starFilled" : "starBorder"}
      />
    </styled.Bar>
  );
};

export default SortFriendsBar;
