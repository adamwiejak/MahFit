import { useNavigate } from "react-router-dom";
import styles from "./styles";
import { iconsAsset } from "../../../assets/icons/iconsAsset";
import IconButton from "../../primitives/IconButton";
import Button from "../../primitives/Button";
import { CardProps } from "@mui/material";

const DevbPage: React.FC<CardProps> = (props) => {
  const { ...rest } = props;
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  return (
    <styles.Wrapper {...rest}>
      <styles.Container>
        {Object.entries(iconsAsset).map((entry: any) => (
          <IconButton
            tip={entry[0].toString()}
            icon={entry[0]}
            key={entry[0]}
            size="large"
            color="default"
          />
        ))}
      </styles.Container>

      <span>
        <Button text="Home" onClick={goHome} />
        <Button text="Home" onClick={goHome} />
        <Button text="Home" onClick={goHome} />
      </span>
    </styles.Wrapper>
  );
};

export default DevbPage;
