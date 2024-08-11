import { Card, styled } from "@mui/material";

export const WorkoutCard = styled(Card)`
  height: 300px;
  display: grid;
  place-items: center;

  ${({ theme: { mixins } }) => mixins.hoverUp}

  &:hover {
    background-color: red;
  }

  &:active {
    background-color: yellow;
  }
`;
