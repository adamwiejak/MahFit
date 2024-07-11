import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)`
  height: 100vh;
  overflow: hidden;
  display: grid;
  column-gap: ${({ theme: { spacing } }) => spacing(1)};
  grid-template-rows: min-content 1fr;
  grid-template-columns: 0.25fr 1fr;

  grid-template-areas:
    "bar bar"
    "side main";
`;

export const Content = styled(Box)`
  grid-area: main;
  overflow: hidden;
`;
