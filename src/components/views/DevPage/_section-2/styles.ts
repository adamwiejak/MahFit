import { styled } from "@mui/material/styles";
import BoxMui from "@mui/material/Box";
import CardMui from "@mui/material/Card";

export const Container = styled(BoxMui)`
  gap: 0.5rem;
  display: grid;
  place-content: start;
  grid-auto-flow: column;
`;

export const Card = styled(CardMui)`
  display: grid;
  gap: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  place-self: start;
  max-height: 100%;
  grid-template-rows: min-content minmax(0, 1fr);
`;
