import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const View = styled(Box)`
  overflow: auto;
  display: grid;
  position: relative;
  overflow: hidden;
  height: 100%;
  grid-template-rows: min-content 1fr;
  gap: ${({ theme: { spacing } }) => spacing(3)};
`;

export const SortBar = styled(Card)`
  padding: ${({ theme: { spacing } }) => spacing(2, 3)};
`;

export const Content = styled(Box)`
  height: 100%;
  overflow: auto;
  padding-right: ${({ theme: { spacing } }) => spacing(4)};
`;
