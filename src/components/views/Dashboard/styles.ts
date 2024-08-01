import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)`
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
  column-gap: ${({ theme: { spacing } }) => spacing(2)};
  grid-template-columns: max-content 1fr;

  grid-template-areas:
    "header header"
    "side main";
`;
