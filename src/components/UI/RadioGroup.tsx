import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MUIRadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import type { FormControlProps } from "@mui/material";
import type { RadioGroupProps as MUIRadioGroupProps } from "@mui/material";
import type { RadioProps } from "@mui/material";
import { Options } from "../../types/forms";

export interface IRadioGroupProps extends MUIRadioGroupProps {
  label?: string;
  error?: boolean;
  options: Options;
  helperText?: string;
  radioProps?: RadioProps;
  color?: FormControlProps["color"];
}

const RadioGroup = React.forwardRef<any, IRadioGroupProps>((props, ref) => {
  const { options, label, error, radioProps, color, helperText, ...rest } =
    props;

  return (
    <FormControl error={error} color={color}>
      <FormLabel>{label}</FormLabel>
      <MUIRadioGroup {...rest}>
        {Object.keys(options).map((key) => (
          <FormControlLabel
            key={key}
            label={key}
            value={options[key]}
            sx={{ color: error ? "error.dark" : "" }}
            control={<Radio ref={ref} color={color} {...radioProps} />}
          />
        ))}
      </MUIRadioGroup>

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
});

export default RadioGroup;
