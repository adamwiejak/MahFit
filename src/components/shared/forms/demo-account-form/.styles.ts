import { styled } from "@mui/material/styles";
import { Box, Card as MuiCard, Typography } from "@mui/material";

export const Paragraph = styled(Typography)`
  margin: ${({ theme: { spacing } }) => spacing(1, 0)};
`;

export const Card = styled(MuiCard)`
  display: grid;
  overflow: auto;
  gap: ${({ theme: { spacing } }) => spacing(3)};
  padding: ${({ theme: { spacing } }) => spacing(4)};
`;

export const Form = styled(Box)`
  display: grid;
  grid-template-rows: 1fr min-content;
  gap: ${({ theme: { spacing } }) => spacing(1)};
`;

export const Inputs = styled(Box)`
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 0.5fr min-content;
  gap: ${({ theme: { spacing } }) => spacing(4)};
  padding: ${({ theme: { spacing } }) => spacing(3)};
`;

export const Actions = styled(Box)`
  display: grid;
  margin-top: ${({ theme: { spacing } }) => spacing(3)};
`;
