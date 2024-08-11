import * as styled from "./_section-1/.styles";
import { iconsAsset } from "../../../assets/icons/iconsAsset";
import IconButton from "../../UI/IconButton";

const Section1 = () => {
  return (
    <styled.Container>
      {Object.entries(iconsAsset).map((entry: any) => (
        <IconButton size="large" key={entry[0]} color="default" icon={entry[0]} tip={entry[0].toString()} />
      ))}
    </styled.Container>
  );
};

export default Section1;
