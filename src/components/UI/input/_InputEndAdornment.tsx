import IconButton from "../IconButton";
import { InputAdornment, InputAdornmentProps } from "@mui/material";
import { IInput } from "./Input";
import useBoolean from "../../../hooks/useBoolean";

interface IInputEndAdornment extends Omit<InputAdornmentProps, "position"> {
  onClear: IInput["onClear"];
  passwordToggler?: ReturnType<typeof useBoolean> | false;
}

export type InputEndAdornmentHandle = { type: IInput["type"] };

const InputEndAdornment: React.FC<IInputEndAdornment> = (props) => {
  const { passwordToggler, onClear, ...rest } = props;

  if (!passwordToggler && !onClear) return null;

  return (
    <InputAdornment position="end" {...rest}>
      {onClear && <IconButton icon="backspace" tip="clear" onClick={onClear} />}

      {passwordToggler && (
        <IconButton
          color="secondary"
          onClick={passwordToggler[1]}
          icon={passwordToggler[0] ? "show" : "hide"}
        />
      )}
    </InputAdornment>
  );
};

export default InputEndAdornment;
