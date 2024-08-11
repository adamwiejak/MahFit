import styled from "./.styles";
import { Link, useRouteError } from "react-router-dom";
import type { BoxProps } from "@mui/material/Box";
import StandardIcon from "../../UI/Icon";
import Button from "../../UI/button/Button";

const NoMatch: React.FC<BoxProps> = (props) => {
  const { ...rest } = props;
  const response: any = useRouteError();
  const { status, statusText, error = { message: "" } } = response;

  return (
    <styled.Container {...rest}>
      <styled.CardBox>
        <styled.Header>{`${statusText} #${status || "Unknown"}`}</styled.Header>

        <styled.Paragraph variant="h6">Sorry, an unexpected error has occurred</styled.Paragraph>

        <styled.Paragraph variant="body2">{error.message}</styled.Paragraph>

        <styled.Actions>
          <Link to="..">
            <Button text="Back" endIcon={<StandardIcon icon="undo" />} />
          </Link>
          <Link to="/">
            <Button text="Home" endIcon={<StandardIcon icon="home" />} />
          </Link>
        </styled.Actions>
      </styled.CardBox>
    </styled.Container>
  );
};

export default NoMatch;
