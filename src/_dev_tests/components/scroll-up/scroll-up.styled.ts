import { styled } from "@mui/material/styles";
import { Fab } from "@mui/material";

export interface StyledProps {
  absolute?: boolean;
}

const ScrollBtn = styled(Fab)`
  position: fixed;
  bottom: ${({ theme: { spacing } }) => spacing(5)};
  right: ${({ theme: { spacing } }) => spacing(5)};
`;

export default {
  ScrollBtn,
};
