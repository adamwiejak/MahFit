import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const Container = styled(Card)`
  width: 25vw;
  display: grid;
  max-height: 83vh;
  position: relative;
  place-self: center;
  text-align: center;
  overflow: visible;
  gap: ${({ theme: { spacing } }) => spacing(4)};
  padding: ${({ theme: { spacing } }) => spacing(4, 3, 3, 3)};
  grid-template-rows: min-content minmax(10px, 1fr) min-content;

  ${({ theme: { mixins } }) => mixins.glassMorphed};
`;

export const Header = styled(Typography)`
  /* margin-bottom: ${({ theme: { spacing } }) => spacing(4)}; */
`;

export const Main = styled(Box)`
  z-index: 5;
  display: grid;
  position: relative;
  perspective: 700px;
  grid-template-rows: 1fr;
  grid-template-areas: "main";
  margin: ${({ theme: { spacing } }) => spacing(0, 3)};
`;

export const CardBox = styled(Card)`
  display: grid;
  grid-area: main;
  height: fit-content;
  backface-visibility: hidden;
  ${({ theme: { mixins } }) => mixins.glassMorphed};
  padding: ${({ theme: { spacing } }) => spacing(4, 3, 3, 3)};
`;

export const Footer = styled(Box)`
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(3)};
`;
