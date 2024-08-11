import { Card, styled } from "@mui/material";

export const Actions = styled(Card)`
  display: grid;
  grid-area: actions;
  place-items: center;
  padding: ${({ theme: { spacing } }) => spacing(1, 2)};
`;
