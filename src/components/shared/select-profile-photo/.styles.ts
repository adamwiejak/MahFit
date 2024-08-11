import { styled } from "@mui/material/styles";
import MuiMenu from "@mui/material/Menu";
import { Avatar, Card } from "@mui/material";
import { excludeStyledProps } from "../../../helpers/functions/functions";

type ImageStyledProps = {
  disabled: boolean;
  error: boolean;
};

export const Wrapper = styled(Card)`
  display: grid;
  align-items: center;
  border-radius: 50%;
`;

const shouldForwardProp = excludeStyledProps(["disabled", "error"]);
export const Image = styled(Avatar, { shouldForwardProp })<ImageStyledProps>`
  border: ${({ error }) => error && "1px red solid"};
  filter: ${({ disabled }) => disabled && "grayscale(1)"};
  pointer-events: ${({ disabled }) => disabled && "none"};

  &:hover {
    cursor: pointer;
  }
`;

export const Menu = styled(MuiMenu)`
  overflow-y: auto;

  ul {
    max-height: 30vh;

    label {
      width: 100%;
      display: grid;
      place-content: center;
    }
  }
`;
