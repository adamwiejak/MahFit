import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "../../shared/image/Image";
import IconButton from "../../UI/IconButton";

export const Container = styled(Box)`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${({ theme: { palette } }) => palette.common.white};
`;

export const ImageBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
`;

export const Img = styled(Image)`
  position: absolute;
  height: 100%;
  aspect-ratio: 2.5/1;
`;

export const Arrow = styled(IconButton)`
  top: 40%;
  z-index: 55 !important;
  position: absolute;
  align-self: center;
  transition: all 0.15s ease-in-out;
  margin: ${({ theme: { spacing } }) => spacing(4)};
  color: inherit;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transform: scale(1.3);
  }
`;

Arrow.defaultProps = {
  size: "large",
};
