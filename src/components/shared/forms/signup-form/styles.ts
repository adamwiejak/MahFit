import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const CardBox = styled(Card)`
  display: grid;
  grid-area: main;
  position: relative;
  backface-visibility: hidden;
  padding: ${({ theme: { spacing } }) => spacing(3)};
`;

export const Form = styled(Box)`
  display: grid;
  overflow: hidden;
  gap: ${({ theme: { spacing } }) => spacing(3)};
`;

export const Inputs = styled(Box)`
  overflow: auto;
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(4)};
  padding: ${({ theme: { spacing } }) => spacing(3)};
`;

export const DateBox = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  gap: ${({ theme: { spacing } }) => spacing(4)};
`;

export const Actions = styled(Box)`
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(3)};
`;
