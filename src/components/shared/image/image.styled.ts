import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import { excludeStyledProps } from "../../../helpers/functions/functions";
import MUISkeleton from "@mui/material/Skeleton";

export interface StyledProps extends BoxProps {
  background?: boolean;
  imageFit?: "fill" | "contain" | "cover" | "scale-down";
  imagePosition?: "top" | "center" | "bottom" | string;
}

const bgFilter = "blur(4px) brightness(0.3) opacity(0.65)";
const excludedProps = ["imageFit", "imagePosition", "background"];
const shouldForwardProp = excludeStyledProps(excludedProps);

export const Container = styled(Box, { shouldForwardProp })<StyledProps>`
  inset: 0;
  height: 100%;
  width: 100%;
  display: block;
  filter: ${({ background }) => (background ? bgFilter : "")};
  position: ${({ background }) => (background ? "absolute" : "relative")};

  img {
    inset: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: ${({ imageFit }) => imageFit};
    object-position: ${({ imagePosition }) => imagePosition};

    filter: ${({ theme: { palette } }) =>
      `brightness(${palette.mode === "light" ? "1" : "0.7"})`};
  }
`;

export const Overlay = styled(Box)`
  inset: 0;
  position: absolute;
  backdrop-filter: blur(15px);
`;

export const Skeleton = styled(MUISkeleton)`
  position: absolute;
  height: 100%;
  width: 100%;
`;
