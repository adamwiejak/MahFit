import { Card, styled } from "@mui/material";

export const Container = styled(Card)`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  /* margin: ${({ theme: { spacing } }) => spacing(1)}; */
  padding: ${({ theme: { spacing } }) => spacing(1)};
`;
