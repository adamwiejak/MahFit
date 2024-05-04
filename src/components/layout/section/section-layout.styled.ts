import { Box, Card, Typography, styled } from "@mui/material";

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

export const IdHeader = styled(Typography)`
  opacity: 0.1;
  position: absolute;
  z-index: 10;
  place-self: center;
  user-select: none;
`;

IdHeader.defaultProps = {
  variant: "h1",
};
