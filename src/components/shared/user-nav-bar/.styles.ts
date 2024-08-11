import { Box, styled } from "@mui/material";

export const Container = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  gap: ${({ theme: { spacing } }) => spacing(4)};
`;
