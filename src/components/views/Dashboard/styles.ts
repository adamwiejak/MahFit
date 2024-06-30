import { Box, Card, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  display: grid;
  height: 100vh;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 0.25fr 1fr;
  gap: ${({ theme: { spacing } }) => spacing()};

  grid-template-areas:
    "bar bar"
    "side main";
`;

export const Content = styled(Card)`
  grid-area: main;
  background-color: red;
  display: grid;
  grid-template-rows: min-content, 1fr;
`;
