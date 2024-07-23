import { Box, Card, styled } from "@mui/material";

export const Bar = styled(Card)`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
  z-index: ${({ theme: { zIndex } }) => zIndex.fab};
  padding: ${({ theme: { spacing } }) => spacing(3, 3, 3, 5)};

  button {
    &:last-child {
      place-self: end;
    }
  }
`;

export const Btn = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
`;
