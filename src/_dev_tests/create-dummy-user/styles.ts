import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  padding: 0.15em;
  display: grid;
  gap: 1em;
`;

export const Form = styled(Box)`
  display: grid;
  place-self: center !important;
  place-content: center;
  gap: ${({ theme: { spacing } }) => spacing(3)};
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
