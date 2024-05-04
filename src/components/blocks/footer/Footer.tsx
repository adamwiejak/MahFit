import * as styled from "./styles";
import Image from "../../shared/image/Image";
import { BoxProps, Typography } from "@mui/material";
import { rankingImageAsset } from "../../../assets/images/ranking/asset";

const Footer: React.FC<BoxProps> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Container component="footer" {...rest}>
      {/* <Image
        background
        fit="cover"
        imagePosition="50% 10%"
        imageAsset={rankingImageAsset}
      /> */}

      <Typography variant="h5">
        @2023 All Rights Reserved. Desing and Development -
        adamwiejak2@gmail.com
      </Typography>
    </styled.Container>
  );
};

export default Footer;
