import { Box, styled } from "@mui/material";

export const Records = styled(Box)`
  display: grid;
  grid-area: records;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme: { spacing } }) => spacing(4)};
`;

export const Record = styled(Box)`
  display: grid;
  place-items: center;
`;
