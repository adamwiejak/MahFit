import { Box, Card, styled } from "@mui/material";

export const Bar = styled(Card)`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: ${({ theme: { zIndex } }) => zIndex.fab};
  padding: ${({ theme: { spacing } }) => spacing(3)};
`;

export const Btn = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
`;
