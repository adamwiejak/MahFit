import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  align-content: space-between;
  place-items: center;
  gap: ${({ theme: { spacing } }) => spacing(4)};
`;
