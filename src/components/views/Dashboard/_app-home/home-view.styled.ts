import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const Page = styled(Box)`
  display: grid;
  place-content: center;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(1)};
`;
