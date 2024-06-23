import { styled } from "@mui/material/styles";
import DialogMUI from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "../../UI/IconButton";
import Box from "@mui/material/Box";

export const Dialog = styled(DialogMUI)`
  display: grid;
`;

export const Header = styled(Box)`
  display: grid;
  grid-template-columns: 1fr min-content;
  text-transform: uppercase;
`;

export const Title = styled(DialogTitle)`
  place-self: center;
`;

export const CloseIcon = styled(IconButton)`
  place-self: start end;
`;

export const Content = styled(DialogContent)`
  padding: ${({ theme: { spacing } }) => spacing(4)};
`;
