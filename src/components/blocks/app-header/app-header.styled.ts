import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

export const Bar = styled(AppBar)`
  width: 100vw;
  box-shadow: none;
  flex-direction: row;
  align-items: center;
  border-color: transparent;
  background-color: transparent;
  backdrop-filter: brightness(0.9) blur(3px);
  padding: ${({ theme: { spacing } }) => spacing(2, 3)};
  color: ${({ theme: { palette } }) => palette.common.white};
`;
