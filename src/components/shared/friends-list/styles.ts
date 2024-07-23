import { Box, styled, Typography } from "@mui/material";

export const FriendsList = styled(Box)`
  display: grid;
  overflow: auto;
  grid-auto-rows: min-content;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(2)};
`;

export const Header = styled(Typography)`
  align-self: start;
  padding-top: ${({ theme: { spacing } }) => spacing(3)};
`;
