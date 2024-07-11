import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Page = styled(Box)`
  height: 100%;
  display: grid;
  overflow: hidden;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(1)};
  padding-top: ${({ theme: { spacing } }) => spacing(3)};
`;
