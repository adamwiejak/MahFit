import React from "react";
import MUIButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonProps as MUIButtonProps } from "@mui/material";

export interface ButtondProps extends MUIButtonProps {
  text: string;
  inProgress?: boolean;
}

const Button: React.FC<ButtondProps> = (props) => {
  const { text, inProgress, disabled, ...rest } = props;

  return (
    <MUIButton {...rest} disabled={disabled || inProgress}>
      {props.text}
      {props.inProgress && <CircularProgress sx={{ position: "absolute" }} />}
    </MUIButton>
  );
};

export default Button;
