import React, { useMemo } from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MUISelect from "@mui/material/Select";
import type { SelectProps as MUISelectProps } from "@mui/material";
import { Options } from "../../types/forms";

export interface SelectProps extends MUISelectProps<string> {
  options: Options;
  helperText?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { label, options, helperText, error, ...rest } = props;
    const optionsEntries = useMemo(() => Object.entries(options), [options]);

    return (
      <FormControl error={error}>
        {label && <InputLabel>{label}</InputLabel>}

        <MUISelect ref={ref} defaultValue="" {...rest} label={label}>
          {optionsEntries.map(([k, v]) => (
            <MenuItem key={k} value={v}>
              {k}
            </MenuItem>
          ))}
        </MUISelect>

        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

export default Select;
