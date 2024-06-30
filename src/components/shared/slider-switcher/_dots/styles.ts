import { Box, styled } from "@mui/material";

export const Bar = styled(Box)`
  bottom: 3%;
  z-index: 99;
  width: 100%;
  display: grid;
  position: absolute;
  grid-auto-flow: column;
  place-content: center;
  gap: ${({ theme: { spacing } }) => spacing(6)};
  padding: ${({ theme: { spacing } }) => spacing(1, 5)};
`;

export const Dot = styled(Box)`
  width: 0.8rem;
  height: 0.8rem;
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
