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

export interface RadioGroupProps extends MUIRadioGroupProps {
  label?: string;
  error?: boolean;
  helperText?: string;
  value?: string;
  color?: FormControlProps["color"];
  radioProps?: RadioProps;
  inputs: Record<string, string>;
}

const RadioGroup = React.forwardRef<any, RadioGroupProps>((props, ref) => {
  const { inputs, label, error, radioProps, color, helperText, ...rest } =
    props;

  return (
    <FormControl error={error} color={color}>
      <FormLabel>{label}</FormLabel>

      <MUIRadioGroup {...rest} value={props.value || ""}>
        {Object.keys(inputs).map((key) => (
          <FormControlLabel
            key={key}
            label={key}
            value={inputs[key]}
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
