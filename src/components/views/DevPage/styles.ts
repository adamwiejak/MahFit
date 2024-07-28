import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Page = styled(Box)`
  gap: ${({ theme: { spacing } }) => spacing(2)};
  display: grid;
  height: 100vh;
  overflow: hidden;
  padding: 5rem 0.5rem 0.5rem 0.5rem;
  grid-auto-rows: min-content minmax(0, 1fr);

  > div {
    border: solid 1px black;
    padding: ${({ theme: { spacing } }) => spacing(2)};
  }
`;
