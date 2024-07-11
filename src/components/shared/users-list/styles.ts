import { Box, styled } from "@mui/material";

export const UsersList = styled(Box)`
  display: grid;
  overflow: auto;
  grid-auto-rows: min-content;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(2)};
`;
