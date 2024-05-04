import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const Container = styled(Card)`
  display: grid;
  width: 34em;
  max-height: 90vh;
  position: relative;
  place-self: center;
  text-align: center;
  overflow: visible;
  grid-template-rows: min-content minmax(10px, 1fr) min-content;
  gap: ${({ theme: { spacing } }) => spacing(4)};
  padding: ${({ theme: { spacing } }) => spacing(4)};
`;

export const Header = styled(Typography)``;

export const Main = styled(Box)`
  z-index: 5;
  display: grid;
  /* overflow: hidden; */
  position: relative;
  perspective: 700px;
  grid-template-rows: 1fr;
  grid-template-areas: "main";
  gap: ${({ theme: { spacing } }) => spacing()};
`;

export const CardBox = styled(Card)`
  display: grid;
  grid-area: main;
  height: fit-content;
  backface-visibility: hidden;
  padding: ${({ theme: { spacing } }) => spacing(4, 3, 3, 3)};
`;

CardBox.defaultProps = {
  elevation: 10,
};

export const Footer = styled(Box)`
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(2)};
`;
