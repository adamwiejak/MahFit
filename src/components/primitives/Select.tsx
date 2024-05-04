import React, { useMemo } from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MUISelect from "@mui/material/Select";
import type { SelectProps as MUISelectProps } from "@mui/material";

export interface SelectProps extends MUISelectProps<string> {
  helperText?: string;
  inputs: Record<string, string>;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { label, inputs, helperText, error, value, ...rest } = props;
    const keys = useMemo(() => Object.keys(inputs), [inputs]);

    return (
      <FormControl error={error}>
        {label && <InputLabel>{label}</InputLabel>}

        <MUISelect ref={ref} {...rest} label={label} value={value || ""}>
          {keys.map((key) => (
            <MenuItem key={key} value={inputs[key]}>
              {key}
            </MenuItem>
          ))}
        </MUISelect>

        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

export default Select;
