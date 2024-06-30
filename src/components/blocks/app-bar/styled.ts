import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";

export const Bar = styled(AppBar)`
  width: 100vw;
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.spacing(5)};
  padding: ${({ theme: { spacing } }) => spacing(4)};
  z-index: ${({ theme: { zIndex } }) => zIndex.appBar};

  & > :last-child {
    flex-grow: 1;
    place-content: end;
  }
`;
