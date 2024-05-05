import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";

export const Wrapper = styled(Box)`
  padding: 0.5rem;
`;

export const Container = styled(Card)`
  padding: 0.5rem;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 100px));
`;
