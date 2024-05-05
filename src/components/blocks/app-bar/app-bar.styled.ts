import { AppBar, styled } from "@mui/material";

export const Container = styled(AppBar)`
  display: grid;
  justify-content: space-between;
  grid-template-columns: max-content max-content;
  gap: ${({ theme: { spacing } }) => spacing(6)};
  padding: ${({ theme: { spacing } }) => spacing(2, 3)};
`;
