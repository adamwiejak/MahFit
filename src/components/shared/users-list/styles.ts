import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const Wrapper = styled(Box)`
  gap: 0.35em;
  padding: 0.35em;
  display: grid;

  place-self: end;
  max-height: 100%;
  grid-template-rows: minmax(0, 1fr) min-content;
`;

export const List = styled(Box)`
  display: grid;
  gap: 0.35em;
  padding: 0.35em;
  overflow-y: auto;
  grid-auto-rows: min-content;
`;
