import { Box, styled } from "@mui/material";

export const View = styled(Box)`
  display: grid;
  overflow: auto;
  position: relative;
  gap: ${({ theme: { spacing } }) => spacing(3)};
  padding: ${({ theme: { spacing } }) => spacing(1)};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
