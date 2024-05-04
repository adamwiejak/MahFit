import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const Container = styled(Card)`
  top: 0;
  left: 0;
  width: 30vw;
  height: 100vh;
  display: grid;
  position: fixed;
  align-content: center;
  z-index: ${({ theme: { zIndex } }) => zIndex.appBar};
  border: ${({ theme: { bordering } }) => bordering(1)};
  border-color: ${({ theme: { palette } }) => palette.divider};
  padding: ${({ theme: { spacing } }) => spacing(4, 2, 2, 2)};
  grid-template-rows: repeat(2, min-content) 1fr repeat(2, min-content);
`;

export const Header = styled(Box)`
  display: grid;
  place-items: center;
  grid-template-columns: min-content 1fr min-content;
  color: inherit;
  gap: ${({ theme: { spacing } }) => spacing(5)};
  padding: ${({ theme: { spacing } }) => spacing(0, 3)};
`;
Header.defaultProps = { component: "header" };

export const Main = styled(Box)`
  display: grid;
  max-height: 100%;
  overflow: hidden;
  text-align: center;
  align-content: center;
  gap: ${({ theme: { spacing } }) => spacing(3)};
  padding: ${({ theme: { spacing } }) => spacing(5, 3)};
`;

export const Footer = styled(Box)`
  display: grid;
  padding: ${({ theme: { spacing } }) => spacing(3, 2, 1, 2)};
  gap: ${({ theme: { spacing } }) => spacing(2)};
`;

Footer.defaultProps = {
  component: "footer",
};
