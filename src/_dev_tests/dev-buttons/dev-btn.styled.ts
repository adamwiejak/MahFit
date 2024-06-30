import { styled } from "@mui/material/styles";
import { excludeStyledProps } from "../../helpers/functions/functions";
import { Card, CardProps } from "@mui/material";

const excludedProps = ["hovered"];
const shouldForwardProp = excludeStyledProps(excludedProps);

interface StyledProps extends CardProps {
  hovered: boolean;
}

export const Container = styled(Card, { shouldForwardProp })<StyledProps>`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  position: fixed;
  z-index: 9900;
  bottom: 5px;
  right: 0%;
  transition: all 0.25s ease-in-out;
  padding: 0.8em;
  border: solid red 1px;
  opacity: ${({ hovered }) => (hovered ? "1" : "0.25")};
  transform: ${({ hovered }) => (hovered ? "" : "translate(90%,85%)")};
`;
