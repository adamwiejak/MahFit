import { Box, styled } from "@mui/material";
import { excludeStyledProps } from "../../../helpers/functions/functions";

export const Bar = styled(Box)`
  bottom: 3%;
  z-index: 99;
  width: 100%;
  display: flex;
  position: absolute;
  place-content: center;
  gap: ${({ theme: { spacing } }) => spacing(5)};
  padding: ${({ theme: { spacing } }) => spacing(1, 5)};
`;

interface StyledProps {
  active: boolean;
}
const shouldForwardProp = excludeStyledProps(["active"]);

export const ImgBox = styled(Box, { shouldForwardProp })<StyledProps>`
  max-width: 30%;
  min-width: 5%;
  border: solid 2px;
  aspect-ratio: 2/1;
  overflow: hidden;
  justify-self: center;
  transition: all 0.15s ease-in-out;

  transform: ${({ active }) => `scale(${active ? 1.1 : 1})`};
  filter: ${({ active }) => `brightness(${active ? 1 : 0.45})`};

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Overlay = styled(Box)`
  position: absolute;
  background-color: #de111139;
`;
