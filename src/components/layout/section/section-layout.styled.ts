import { Box, Card, styled } from "@mui/material";

export const Section = styled(Box)`
  position: relative;
  min-height: 100vh;
  display: grid;
`;

export const Content = styled(Card)`
  display: grid;
  place-items: center;
  grid-auto-flow: column;
`;

Content.defaultProps = { elevation: 24, square: true };
