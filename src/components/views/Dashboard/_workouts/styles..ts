import { Box, styled } from "@mui/material";

export const View = styled(Box)`
  height: 100%;
  display: grid;
  place-items: center;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(1)};
`;
