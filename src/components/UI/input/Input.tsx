import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import type { BaseTextFieldProps, InputAdornmentProps } from "@mui/material";
import InputEndAdornment from "./_InputEndAdornment";
import useBoolean from "../../../hooks/useBoolean";

export interface IInput extends BaseTextFieldProps {
  onClear?: () => void;
  adornmentStart?: InputAdornmentProps["children"];
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const Input = React.forwardRef<HTMLDivElement, IInput>((props, ref) => {
  const { type, adornmentStart, onClear, ...rest } = props;
  const passwordToggler = useBoolean(false);

  const startAdornment = adornmentStart ? (
    <InputAdornment position="start">{adornmentStart}</InputAdornment>
  ) : null;

  const showPasword = type === "password" && passwordToggler[0] ? "text" : type;

  return (
    <TextField
      {...rest}
      ref={ref}
      type={showPasword}
      InputProps={{
        startAdornment,
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
