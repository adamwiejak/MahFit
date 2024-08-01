import { Box, Card, styled } from "@mui/material";

export const Bar = styled(Card)`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr) min-content;
  padding: ${({ theme: { spacing } }) => spacing(2)};
  z-index: ${({ theme: { zIndex } }) => zIndex.fab};
`;

export const Btn = styled(Box)`
  display: grid;
  place-items: center;
  grid-auto-flow: column;
`;

export const FavBtnCard = styled(Card)``;
