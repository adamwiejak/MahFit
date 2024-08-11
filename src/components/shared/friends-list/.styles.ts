import { Box, styled, Typography } from "@mui/material";
import MuiCard from "@mui/material/Card";

export const FriendsList = styled(Box)`
  flex-grow: 1;
  display: grid;
  overflow: auto;
  grid-auto-rows: min-content;
  gap: ${({ theme: { spacing } }) => spacing(1)};
`;

export const Header = styled(Typography)`
  align-self: start;
  padding-top: ${({ theme: { spacing } }) => spacing(3)};
`;

export const Card = styled(MuiCard)`
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(1, 3, 3, 3)};
  margin: ${({ theme: { spacing } }) => spacing(5, 3)};

  button {
    margin-top: ${({ theme: { spacing } }) => spacing(3)};
  }
`;
