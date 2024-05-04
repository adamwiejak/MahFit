import { styled } from "@mui/material/styles";
import ToolBar from "@mui/material/Toolbar";
import BoxMui from "@mui/material/Box";

export const Container = styled(ToolBar)`
  align-content: space-between;
  /* flex-direction: column; */
`;

export const Box = styled(BoxMui)`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: ${({ theme: { spacing } }) => spacing(5)};
`;
