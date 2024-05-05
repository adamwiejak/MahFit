import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Container = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: ${({ theme: { spacing } }) => spacing(4)};
`;
