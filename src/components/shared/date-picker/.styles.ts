import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const DateBox = styled(Box)`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  gap: ${({ theme: { spacing } }) => spacing(5)};
`;
