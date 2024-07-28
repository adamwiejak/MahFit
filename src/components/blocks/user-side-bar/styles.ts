import { Box, Card, styled } from "@mui/material";

export const Container = styled(Card)`
  height: 100%;
  flex-grow: 1;
  display: grid;
  overflow: hidden;
  max-height: 100%;
  text-align: center;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  margin: ${({ theme: { spacing } }) => spacing(1)};
  padding: ${({ theme: { spacing } }) => spacing(1)};
  grid-template-rows: min-content 1fr min-content;
`;
