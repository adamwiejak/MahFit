import React, { useRef } from "react";
import { styled } from "@mui/material";
import type { IInput } from "./Input";
import Input from "./Input";

const StyledFileInput = styled("label")`
  &:hover {
    cursor: pointer;
  }
`;

interface IFileInput extends Omit<IInput, "type"> {}

const FileInput = React.forwardRef<HTMLInputElement, IFileInput>(
  (props, ref) => {
    const { error, children, ...rest } = props;
    const inputElRef = useRef<HTMLInputElement>(null);

    return (
      <StyledFileInput>
        <Input ref={ref} sx={{ display: "none" }} type="file" {...rest}></Input>

        {children}
      </StyledFileInput>
    );
  }
);

export default FileInput;
