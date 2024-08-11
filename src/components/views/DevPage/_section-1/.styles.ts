import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Container = styled(Box)`
  width: 100%;
  display: grid;
  gap: 0.35rem;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  grid-auto-rows: min-content;
`;
