import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const CardBox = styled(Card)`
  display: grid;
  grid-area: main;
  height: fit-content;
  backface-visibility: hidden;
  padding: ${({ theme: { spacing } }) => spacing(3, 3, 2, 3)};
`;

export const Form = styled(Box)`
  display: grid;
  overflow: hidden;
  align-content: center;
  gap: ${({ theme: { spacing } }) => spacing(4)};
`;

export const Inputs = styled(Box)`
  overflow: auto;
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(4)};
  padding: ${({ theme: { spacing } }) => spacing(3)};
`;

export const Actions = styled(Box)`
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(3)};
  text-align: center;
`;
