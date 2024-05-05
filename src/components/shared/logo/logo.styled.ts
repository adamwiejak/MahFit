import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Wrapper = styled(Box)`
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  gap: ${({ theme: { spacing } }) => spacing(4)};
`;

export const Text = styled(Typography)`
  font-weight: 700;
  letter-spacing: 0.3rem;
  line-height: 0.95;
`;

Text.defaultProps = { variant: "h4", noWrap: true };
