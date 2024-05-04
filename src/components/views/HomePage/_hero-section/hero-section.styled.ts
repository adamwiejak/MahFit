import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "../../../shared/image/Image";

export const Section = styled(Box)`
  height: 100vh;
  display: grid;
  position: relative;
`;

export const Overlay = styled(Box)`
  inset: 0;
  position: absolute;
  pointer-events: none;
  background-image: linear-gradient(to right, #000000c5, #0000008c, #0000002d);
`;

export const Content = styled(Box)`
  bottom: 25%;
  left: 4%;
  display: grid;
  position: absolute;
  place-items: center;
  align-content: center;
  gap: ${({ theme: { spacing } }) => spacing(8)};
  color: ${({ theme: { palette } }) => palette.common.white};
`;

export const HeaderBox = styled(Box)`
  display: grid;
  color: ${({ theme: { palette } }) => palette.common.white};
`;

export const ActionsBox = styled(Box)`
  display: grid;
  align-items: end;
  grid-auto-flow: column;
  gap: ${({ theme: { spacing } }) => spacing(6)};
`;

export const Header = styled(Typography)`
  font-family: monospace;
  letter-spacing: 0.3rem;
  font-weight: 700;

  &:nth-of-type(2) {
    margin-left: ${({ theme: { spacing } }) => spacing(8)};
  }
`;

export const Img = styled(Image)`
  position: absolute;
`;
