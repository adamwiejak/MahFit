import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "../../../UI/IconButton";

export const Form = styled(Box)`
  width: 100%;
  grid-template-rows: min-content 1fr;
  gap: ${({ theme: { spacing } }) => spacing(5)};
  padding: ${({ theme: { spacing } }) => spacing(2, 2, 4, 2)};
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const CloseIcon = styled(IconButton)`
  justify-self: end;
  padding: 0;
`;

export const Inputs = styled(Box)`
  padding: ${({ theme: { spacing } }) => spacing(0, 3)};
`;

export const Actions = styled(Box)`
  gap: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(0, 3)};
`;
