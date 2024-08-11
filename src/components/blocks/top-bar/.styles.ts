import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const Bar = styled(Box)`
  width: 100vw;
  position: fixed;
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.spacing(4)};
  padding: ${({ theme: { spacing } }) => spacing(4, 5)};
  z-index: ${({ theme: { zIndex } }) => zIndex.appBar};

  ${({ theme: { mixins } }) => mixins.glassMorphed}
`;

export const Actions = styled(Box)`
  flex-grow: 1;
  display: grid;
  place-content: end;
  place-items: center;
  grid-auto-flow: column;
  gap: ${(props) => props.theme.spacing(4)};
`;
