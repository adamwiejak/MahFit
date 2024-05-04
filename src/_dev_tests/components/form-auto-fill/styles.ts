import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)`
  display: grid;
  gap: 0.5em;
  grid-auto-flow: column;
  padding: 0.25em;
  background-color: #ff000066;
  border: solid 1px #ff0000;
`;

export default {
  Container,
};
