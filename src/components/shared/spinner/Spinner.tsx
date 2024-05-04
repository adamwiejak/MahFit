import React from "react";
import * as styled from "./spinner.styles";
import type { CircularProgressProps } from "@mui/material";

interface ISpinner {
  open: boolean;
  size?: CircularProgressProps["size"];
  color?: CircularProgressProps["color"];
}

const Spinner: React.FC<ISpinner> = (props) => {
  const { open, color, size } = props;

  return (
    <styled.Overlay>
      <styled.Spinner color={color} size={size} />
    </styled.Overlay>
  );
};

export default Spinner;
