import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Page = styled(Box)`
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-auto-rows: min-content minmax(0, 1fr);
  gap: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(2)};

  > div {
    border: solid 1px black;
    padding: ${({ theme: { spacing } }) => spacing(2)};
  }
`;
