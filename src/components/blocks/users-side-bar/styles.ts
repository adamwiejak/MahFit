import { Box, Card, styled } from "@mui/material";

export const Container = styled(Card)`
  display: grid;
  height: 100%;
  gap: ${({ theme: { spacing } }) => spacing(1)};
  grid-template-rows: min-content 1fr min-content;
  overflow: hidden;
`;
