import { Box, Card, styled } from "@mui/material";

export const Container = styled(Card)`
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(1)};
  grid-template-columns: 0.25fr 1fr min-content;

  grid-template-areas:
    "img info actions"
    "img records actions";
`;

export const Image = styled(Card)`
  grid-area: img;
  position: relative;
  margin: ${({ theme: { spacing } }) => spacing(2, 0, 2, 2)};

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
`;

export const Info = styled(Box)`
  grid-area: info;
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
