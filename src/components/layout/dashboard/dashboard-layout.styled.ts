import { Box, Card, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  display: grid;
  height: 100vh;
  grid-template-rows: min-content 1fr;
  gap: ${({ theme: { spacing } }) => spacing(1)};
`;

export const Content = styled(Card)`
  height: 100vh;
  display: grid;
`;
