import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Page = styled(Box)`
  gap: 0.5rem;
  padding: 0.5rem;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: min-content minmax(0, 1fr);
`;
