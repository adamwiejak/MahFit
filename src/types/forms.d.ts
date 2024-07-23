import { InputProps, RadioGroupProps, SelectProps } from "@mui/material";
import { RegisterOptions } from "react-hook-form";
import { IconName } from "../components/UI/Icon";

export type Options = { [label: string]: string | number };

export interface FormInput<T> extends Omit<InputProps, "name"> {
  name: keyof T;
  label?: string;
  icon?: IconName;
  registerOptions?: RegisterOptions;
}

export interface FormSelect<T> extends Omit<SelectProps, "name"> {
  name: keyof T;
  options: Options;
  registerOptions?: RegisterOptions;
}

export interface FormRadioGroup<T> extends Omit<RadioGroupProps, "name"> {
  name: keyof T;
  label?: string;
  options: Options;
  registerOptions?: RegisterOptions;
}
