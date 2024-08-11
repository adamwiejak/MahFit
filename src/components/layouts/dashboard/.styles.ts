import { AppBar, styled } from "@mui/material";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)`
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(max-content, 0.25fr) 1fr;
  grid-template-rows: min-content 1fr;

  grid-template-areas:
    "header header"
    "side main";
`;

export const Bar = styled(AppBar)`
  width: 100vw;
  display: flex;
  grid-area: "header";
  flex-direction: row;
  gap: ${(props) => props.theme.spacing(5)};
  padding: ${({ theme: { spacing } }) => spacing(4)};
  z-index: ${({ theme: { zIndex } }) => zIndex.appBar};

  & > :last-child {
    flex-grow: 1;
    place-content: end;
  }
`;
