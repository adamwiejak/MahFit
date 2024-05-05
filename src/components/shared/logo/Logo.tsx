import * as styled from "./logo.styled";
import { Link } from "react-router-dom";
import type { BoxProps } from "@mui/material/Box";
import Icon from "../../UI/Icon";

const Logo: React.FC<BoxProps> = (props) => {
  return (
    <Link to="/home">
      <styled.Wrapper {...props}>
        <Icon icon="benchPress" fontSize="large" />
        <styled.Text>MahFit</styled.Text>
      </styled.Wrapper>
    </Link>
  );
};

export default Logo;
