import { Box, Card, styled } from "@mui/material";

export const Container = styled(Card)`
  min-height: 5rem;
  display: grid;
  grid-template-columns: 0.3fr 1fr min-content;
  gap: ${({ theme: { spacing } }) => spacing(1)};
  padding: ${({ theme: { spacing } }) => spacing(1)};
  transition: all 0.25s;

  grid-template-areas:
    "img info actions"
    "img records actions";

  &:hover {
    cursor: pointer;
    transform: scale(0.97);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Image = styled(Card)`
  grid-area: img;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    inset: 0;
    position: absolute;
    object-fit: cover;
  }
`;

export const Info = styled(Box)`
  grid-area: info;
  display: grid;
  grid-template-columns: min-content 1fr;
  text-align: center;
`;

export const Records = styled(Box)`
  display: grid;
  grid-area: records;
  grid-template-columns: repeat(3, 1fr);
`;

export const Actions = styled(Card)`
  display: grid;
  grid-area: actions;
  place-items: center;
  padding: ${({ theme: { spacing } }) => spacing(1, 2)};
`;
