import { Card, styled, Typography } from "@mui/material";

export const Bar = styled(Card)`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: repeat(2, min-content);
  gap: ${({ theme: { spacing } }) => spacing(3, 2)};
  z-index: ${({ theme: { zIndex } }) => zIndex.fab};
  padding: ${({ theme: { spacing } }) => spacing(3)};
`;

export const Header = styled(Typography)`
  align-self: start;
  padding-top: ${({ theme: { spacing } }) => spacing(3)};
`;

export const Action = styled(Card)`
  align-self: end;
  grid-column: 1/-1;
  gap: ${({ theme: { spacing } }) => spacing(2)};
`;
