import { Box, Card, styled } from "@mui/material";

export const Container = styled(Card)`
  height: 100%;
  display: grid;
  text-align: center;
  gap: ${({ theme: { spacing } }) => spacing(1)};
  grid-template-rows: min-content 1fr min-content;
  overflow: hidden;
`;
