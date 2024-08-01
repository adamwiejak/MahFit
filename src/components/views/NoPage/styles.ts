import { styled } from "@mui/material/styles";
import { Box, ButtonGroup } from "@mui/material";

export const NoPage = styled(Box)`
  height: 100vh;
  text-align: center;
  grid-template-rows: min-content 1fr;
  color: ${({ theme: { palette } }) => palette.common.white};
`;

export const Actions = styled(ButtonGroup)`
  top: ${({ theme: { spacing } }) => spacing(3)};
  right: ${({ theme: { spacing } }) => spacing(3)};
  position: absolute;
  z-index: 10;
`;
