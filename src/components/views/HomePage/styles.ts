import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Page = styled(Box)`
  padding: ${({ theme: { spacing } }) => spacing(0)};
  background-color: transparent;
  position: relative;
`;
