import { styled } from "@mui/material/styles";
import DialogMUI from "@mui/material/Dialog";
import DialogTitleMUI from "@mui/material/DialogTitle";
import DialogActionsMUI from "@mui/material/DialogActions";
import DialogContentMUI from "@mui/material/DialogContent";
import DialogContentTextMUI from "@mui/material/DialogContentText";

const Dialog = styled(DialogMUI)`
  /* background-color: #ff000011; */
`;

const DialogTitle = styled(DialogTitleMUI)`
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.3rem;
  padding: ${({ theme: { spacing } }) => spacing(4, 2, 3, 2)};
`;

const DialogContent = styled(DialogContentMUI)`
  padding: ${({ theme: { spacing } }) => spacing(4, 3)};
  margin: ${({ theme: { spacing } }) => spacing(0, 3)};
`;

const DialogContentText = styled(DialogContentTextMUI)`
  text-align: left;

  &:not(:last-of-type) {
    margin-bottom: ${({ theme: { spacing } }) => spacing(4)};
  }
`;

const DialogActions = styled(DialogActionsMUI)``;

export default {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
};
