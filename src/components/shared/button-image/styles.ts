import styled from "@mui/material/styles/styled";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const Container = styled(ButtonBase)`
  position: relative;
  padding: ${({ theme: { spacing } }) => spacing(4)};
`;

const Text = styled(Typography)`
  position: relative;
  text-transform: uppercase;
  color: ${({ theme: { palette } }) => palette.common.white};
`;

Text.defaultProps = {
  variant: "h3",
};

export default {
  Container,
  Text,
};
