import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import { excludeStyledProps } from "../../../helpers/functions/functions";

const excludedProps = ["hovered"];
const shouldForwardProp = excludeStyledProps(excludedProps);

interface StyledProps extends BoxProps {
  hovered: boolean;
}

const Container = styled(Box, { shouldForwardProp })<StyledProps>`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  position: fixed;
  z-index: 9900;
  bottom: 5px;
  right: 0%;
  background-color: #ff0000;
  transition: all 0.25s ease-in-out;
  padding: 0.8em;
  border: solid black 1px;
  opacity: ${({ hovered }) => (hovered ? "1" : "0.25")};
  transform: ${({ hovered }) => (hovered ? "" : "translate(90%,85%)")};
`;

export default {
  Container,
};
