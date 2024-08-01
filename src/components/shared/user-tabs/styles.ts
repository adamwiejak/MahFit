import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import TabsMui from "@mui/material/Tabs";

export const Wrapper = styled(Box)`
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
`;

export const Tabs = styled(TabsMui)``;

export const Content = styled(Box)`
  display: grid;
  overflow: hidden;
  position: relative;
  padding: ${({ theme: { spacing } }) => spacing(3)};
`;
