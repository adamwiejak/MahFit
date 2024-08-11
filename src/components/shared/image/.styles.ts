import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export interface StyledProps {
  background?: boolean;
}

export const Container = styled(Box)`
  inset: 0;
  display: grid;
  pointer-events: none;

  img {
    inset: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    filter: ${({ theme: { palette } }) => `brightness(${palette.mode === "light" ? "1" : "0.7"})`};
  }
`;

export const Overlay = styled(Box)`
  inset: 0;
  position: absolute;
  backdrop-filter: blur(15px);
`;
