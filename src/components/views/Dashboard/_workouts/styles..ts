import { Box, Card, styled } from "@mui/material";

export const View = styled(Box)`
  display: grid;
  overflow: auto;
  position: relative;
  gap: ${({ theme: { spacing } }) => spacing(3)};
  padding: ${({ theme: { spacing } }) => spacing(1)};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const WorkoutCard = styled(Card)`
  height: 300px;
  display: grid;
  place-items: center;

  transition: all 0.25s;

  &:hover {
    cursor: pointer;
    transform: scale(0.97);
  }

  &:active {
    transform: scale(0.95);
  }
`;
