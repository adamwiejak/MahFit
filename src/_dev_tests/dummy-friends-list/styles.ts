import { Box, styled } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing(1)};
`;
