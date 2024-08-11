import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const Container = styled(Box)`
  height: 100%;
  display: grid;
  position: relative;
  place-content: center;
  gap: ${({ theme: { spacing } }) => spacing(8)};
  border: ${({ theme: { bordering } }) => bordering(1)};
  border-color: ${({ theme: { palette } }) => palette.divider};
  text-align: center;
`;

const CardBox = styled(Card)`
  display: grid;
  padding: ${({ theme: { spacing } }) => spacing(5, 3, 3, 3)};
  gap: ${({ theme: { spacing } }) => spacing(5)};
  border: ${({ theme: { bordering } }) => bordering(1)};
  border-color: ${({ theme: { palette } }) => palette.divider};
  min-width: 50vw;
  position: relative;
`;

CardBox.defaultProps = { elevation: 24 };

const Header = styled(Typography)`
  font-weight: 700;
  letter-spacing: 0.1em;
`;
Header.defaultProps = { variant: "h4", color: "error" };

const Actions = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  gap: ${({ theme: { spacing } }) => spacing(4)};
  padding: ${({ theme: { spacing } }) => spacing(2)};
`;

const Paragraph = styled(Typography)`
  word-wrap: no-wrap;
`;
Paragraph.defaultProps = { variant: "body2" };

export default {
  Container,
  CardBox,
  Header,
  Actions,
  Paragraph,
};
