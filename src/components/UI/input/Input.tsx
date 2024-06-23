import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import type { BaseTextFieldProps, InputAdornmentProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputEndAdornment from "./_InputEndAdornment";
import useBoolean from "../../../hooks/useBoolean";

const StyledInput = styled(TextField)`
  button:first-of-type {
    opacity: 0;
    transition: all 0.2s ease-in-out;
    pointer-events: none;

    &:hover {
      opacity: 1;
      pointer-events: all;
    }
  }

  input:focus ~ * button:first-of-type {
    opacity: 1;
    pointer-events: all;
  }
`;

export interface IInput extends BaseTextFieldProps {
  onClear?: () => void;
  adornmentStart?: InputAdornmentProps["children"];
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const Input = React.forwardRef<HTMLDivElement, IInput>((props, ref) => {
  const { type, adornmentStart, onClear, ...rest } = props;
  const passwordToggler = useBoolean(false);

  const showPasword = type === "password" && passwordToggler[0] ? "text" : type;

  const startAdornment = adornmentStart && (
    <InputAdornment position="start">{adornmentStart}</InputAdornment>
  );

  return (
    <StyledInput
      {...rest}
      ref={ref}
      type={showPasword}
      InputProps={{
        startAdornment: startAdornment || null,
        endAdornment: (
          <InputEndAdornment
            onClear={onClear}
            passwordToggler={type === "password" && passwordToggler}
          />
        ),
      }}
    />
  );
});

export default Input;
