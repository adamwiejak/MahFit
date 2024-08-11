import { Box, Card, styled } from "@mui/material";

export const Container = styled(Card)`
  min-height: 5rem;
  display: grid;
  grid-template-columns: 0.3fr 1fr min-content;
  gap: ${({ theme: { spacing } }) => spacing(1)};
  padding: ${({ theme: { spacing } }) => spacing(1)};
  grid-template-areas:
    "img info actions"
    "img records actions";

  ${({ theme: { mixins } }) => mixins.hoverUp}
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
