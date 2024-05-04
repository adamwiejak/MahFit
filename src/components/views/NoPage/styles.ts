import { styled } from "@mui/material/styles";
import { Box, ButtonGroup } from "@mui/material";

const NoPage = styled(Box)`
  height: 100vh;
  text-align: center;
  grid-template-rows: min-content 1fr;
  color: ${({ theme: { palette } }) => palette.common.white};
`;

const Main = styled(Box)`
  height: 100%;
`;

const Actions = styled(ButtonGroup)`
  top: ${({ theme: { spacing } }) => spacing(3)};
  right: ${({ theme: { spacing } }) => spacing(3)};
  position: absolute;
  z-index: 10;
`;

export default {
  NoPage,
  Main,
  Actions,
};
