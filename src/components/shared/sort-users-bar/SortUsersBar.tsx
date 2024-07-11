import * as styled from "./styles";
import * as config from "./config";
import IconButton from "../../UI/IconButton";
import Icon from "../../UI/Icon";
import { CardProps } from "@mui/material";

interface ISortUsersBar extends CardProps {}

const SortUsersBar: React.FC<ISortUsersBar> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Bar {...rest}>
      {config.btns.map((icon) => (
        <styled.Btn key={icon}>
          <Icon icon={icon} fontSize="small" />
          <IconButton icon="sortUp" size="small" />
        </styled.Btn>
      ))}
    </styled.Bar>
  );
};

export default SortUsersBar;
