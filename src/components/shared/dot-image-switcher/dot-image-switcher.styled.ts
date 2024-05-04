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

export const Dot = styled(Box)`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  transition: all 0.15s ease-in-out;
  background-color: ${({ theme: { palette } }) => palette.common.white};

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    cursor: pointer;
  }
`;
