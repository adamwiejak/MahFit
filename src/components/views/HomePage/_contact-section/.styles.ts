import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const Section = styled(Box)`
  display: grid;
  grid-auto-flow: column;
`;

export const CardBox = styled(Card)`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 2.5fr 1fr 2fr;
  gap: ${({ theme: { spacing } }) => spacing(8)};
  /* ${({ theme: { mixins } }) => mixins.glassMorphed}; */
  padding: ${({ theme: { spacing } }) => spacing(5)};

  > * {
    grid-row: 1/-1;
  }
`;

export const Glass = styled(Card)`
  ${({ theme: { mixins } }) => mixins.glassMorphed};
`;
