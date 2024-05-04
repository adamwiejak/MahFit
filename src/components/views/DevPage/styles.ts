import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Section } from "../HomePage/_about-section/about-seciton.styled";

const Wrapper = styled(Section)`
  display: grid;
  padding: 1rem;
  height: 100vh;
  align-items: center;
`;

const Container = styled(Box)`
  place-items: center;
  display: grid;
  padding: 5rem;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-auto-rows: 100px;
`;

export default { Container, Wrapper };
