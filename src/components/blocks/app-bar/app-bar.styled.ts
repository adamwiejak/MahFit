import { AppBar, Toolbar as MuiToolbar, styled } from "@mui/material";

export const Container = styled(AppBar)`
  display: grid;
  width: 100vw;
  grid-auto-flow: column;
  justify-content: space-between;
  gap: ${({ theme: { spacing } }) => spacing(6)};
  padding: ${({ theme: { spacing } }) => spacing(0, 3)};
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;

export const Toolbar = styled(MuiToolbar)`
  gap: 1rem;
  display: grid;
  grid-auto-flow: column;
`;
