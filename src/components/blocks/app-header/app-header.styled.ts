import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Bar = styled(Box)`
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  gap: ${(props) => props.theme.spacing(5)};
  backdrop-filter: brightness(0.9) blur(4px);
  z-index: ${({ theme: { zIndex } }) => zIndex.appBar};
  padding: ${({ theme: { spacing } }) => spacing(4, 5)};
  color: ${({ theme: { palette } }) => palette.common.white};
`;
