import { Card, styled } from "@mui/material";

export const Bar = styled(Card)`
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  z-index: ${({ theme: { zIndex } }) => zIndex.fab};
  padding: ${({ theme: { spacing } }) => spacing(2, 3)};
`;
