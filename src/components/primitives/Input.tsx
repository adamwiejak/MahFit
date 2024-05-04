import React from "react";
import TextField from "@mui/material/TextField";
import ButtonIcon from "./IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import useBoolean from "../../hooks/useBoolean";
import type { BaseTextFieldProps, InputAdornmentProps } from "@mui/material";

export interface InputProps extends BaseTextFieldProps {
  onClear?: () => void;
  adornmentStart?: InputAdornmentProps["children"];
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const { type, adornmentStart, onClear, ...rest } = props;
  const passwordToggler = useBoolean(false);

  return (
    <TextField
      {...rest}
      ref={ref}
      type={passwordToggler[0] ? "text" : type}
      InputProps={{
        startAdornment: <_StartAdornment adornmentStart={adornmentStart} />,
        endAdornment: (
          <_EndAdornment
            passwordToggler={passwordToggler}
            type={type}
            onClear={onClear}
          />
        ),
      }}
    />
  );
});

export default Input;

////////START ADORMENTS//////////////
/////////////////////////////////////
const _StartAdornment: React.FC<{
  adornmentStart: InputProps["adornmentStart"];
}> = (props) => {
  const { adornmentStart } = props;

  return adornmentStart ? (
    <InputAdornment position="start">{adornmentStart}</InputAdornment>
  ) : null;
};

////////END ADORMENTS//////////////
/////////////////////////////////////
interface EndAdornment {
  type: InputProps["type"];
  onClear: InputProps["onClear"];
  passwordToggler: ReturnType<typeof useBoolean>;
}

const _EndAdornment: React.FC<EndAdornment> = (props) => {
  const { type, onClear, passwordToggler } = props;

  return onClear || type === "password" ? (
    <InputAdornment position="end">
      {type === "password" && (
        <ButtonIcon
          icon={passwordToggler[0] ? "show" : "hide"}
          onClick={passwordToggler[1]}
        />
      )}

      {onClear && <ButtonIcon icon="backspace" tip="clear" onClick={onClear} />}
    </InputAdornment>
  ) : null;
};
