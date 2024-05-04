import styled from "./styles";
import { Link, useRouteError } from "react-router-dom";
import type { BoxProps } from "@mui/material/Box";
import StandardIcon from "../../primitives/Icon";
import ButtonStandard from "../../primitives/Button";
import Image from "../image/Image";
import { noFoundImageAsset } from "../../../assets/images/404/asset";

const NoMatch: React.FC<BoxProps> = (props) => {
  const { ...rest } = props;
  const error: any = useRouteError();
  console.log(error.message);

  return (
    <styled.Container {...rest}>
      <Image background imageAsset={noFoundImageAsset} />

      <styled.CardBox>
        <styled.Header>{`Status #${error?.status || "Unknown"}. ${
          error?.statusText || "Undefined Error"
        }`}</styled.Header>
        <styled.Paragraph variant="h6">
          {error?.data || error?.message || "Someting Went Wrong"}
        </styled.Paragraph>

        <styled.Actions>
          <Link to="..">
            <ButtonStandard
              text="Back"
              endIcon={<StandardIcon icon="undo" />}
            />
          </Link>

          <Link to="/home">
            <ButtonStandard
              text="Home"
              endIcon={<StandardIcon icon="home" />}
            />
          </Link>
        </styled.Actions>
      </styled.CardBox>
    </styled.Container>
  );
};

export default NoMatch;
