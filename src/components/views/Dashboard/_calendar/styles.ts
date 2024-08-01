import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const View = styled(Box)`
  overflow: auto;
  display: grid;
  position: relative;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(1)};
`;
