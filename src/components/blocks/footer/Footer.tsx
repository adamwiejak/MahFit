import * as styled from "./styles";
import { BoxProps, CardProps, Typography } from "@mui/material";

const Footer: React.FC<CardProps> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Container {...rest} elevation={24}>
      <Typography variant="h5">
        @2023 All Rights Reserved. Desing and Development -
        adamwiejak2@gmail.com
      </Typography>
    </styled.Container>
  );
};

export default Footer;
