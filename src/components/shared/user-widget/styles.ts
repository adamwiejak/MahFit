import { Box, Card, styled } from "@mui/material";

export const Container = styled(Card)`
  gap: 0.2em;
  display: grid;
  grid-auto-flow: column;
  padding: 0.4em 0.3em;
  position: relative;
`;

export const Info = styled(Box)`
  display: grid;
  gap: 0.2em;

  span {
    display: grid;
    grid-auto-flow: column;
  }
`;
