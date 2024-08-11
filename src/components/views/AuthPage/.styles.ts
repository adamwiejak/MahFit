import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "../../shared/image/Image";

export const Page = styled(Box)`
  position: relative;
  height: 100vh;
  display: grid;
  padding-top: ${({ theme: { spacing } }) => spacing(6)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(3)};
`;

export const Background = styled(Image)`
  opacity: 0.7;
  position: fixed;
  filter: brightness(0.8) blur(2px);
`;
