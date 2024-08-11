import { styled } from "@mui/material/styles";
import BoxMui from "@mui/material/Box";

export const Container = styled(BoxMui)`
  gap: 1rem;
  display: grid;
  place-items: start;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
`;
