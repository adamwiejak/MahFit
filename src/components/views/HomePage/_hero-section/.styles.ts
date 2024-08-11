import { Box, Card, styled } from "@mui/material";
import Image from "../../../shared/image/Image";

export const Section = styled(Box)`
  height: min(100vw, 100vh);
  display: grid;
  position: relative;
  grid-auto-flow: column;
  ${({ theme: { mixins } }) => mixins.boxCenter}
`;

export const ContentCard = styled(Box)`
  padding: ${({ theme: { spacing } }) => spacing(3)};
  z-index: 10;
`;

export const Background = styled(Image)`
  position: absolute;
`;
