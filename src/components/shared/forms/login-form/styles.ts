import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

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
`;
