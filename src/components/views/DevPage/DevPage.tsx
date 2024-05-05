import * as styled from "./styles";
import { useNavigate } from "react-router-dom";
import { iconsAsset } from "../../../assets/icons/iconsAsset";
import IconButton from "../../UI/IconButton";
import { CardProps, Icon, Typography } from "@mui/material";
import Button from "../../UI/button/Button";

const DevbPage: React.FC<CardProps> = (props) => {
  const { ...rest } = props;
  const navigate = useNavigate();

  return (
    <>
      <Button sx={{ m: 3 }} text="Home" onClick={() => navigate("/")} />

      <styled.Wrapper {...rest}>
        <styled.Container>
          <Typography variant="h5">USED ICONS :</Typography>

          <Icon />
        </styled.Container>

        <styled.Container>
          {Object.entries(iconsAsset).map((entry: any) => (
            <IconButton
              tip={entry[0].toString()}
              icon={entry[0]}
              key={entry[0]}
              size="large"
              color="default"
            />
          ))}
        </styled.Container>
      </styled.Wrapper>
    </>
  );
};

export default DevbPage;
