import * as styled from "./styles";
import { iconsAsset } from "../../../../assets/icons/iconsAsset";
import IconButton from "../../../UI/IconButton";

const Section1 = () => {
  return (
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
  );
};

export default Section1;
