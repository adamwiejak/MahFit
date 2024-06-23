import React from "react";
import MUIButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import type { ButtonProps } from "@mui/material";

export interface IButton extends ButtonProps {
  text?: string;
  inProgress?: boolean;
}

const Button: React.FC<IButton> = (props) => {
  const { text, inProgress, disabled, children, ...rest } = props;

  return (
    <MUIButton {...rest} disabled={disabled}>
      {text}
      {children}
      {inProgress && (
        <CircularProgress sx={{ position: "absolute", height: "1%" }} />
      )}
    </MUIButton>
  );
};

export default Button;
