import { Card, styled } from "@mui/material";

export const Container = styled(Card)`
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(1)};
`;
