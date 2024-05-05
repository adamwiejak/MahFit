interface FormInput<T> extends Omit<InputProps, "name"> {
  name: keyof T;
  label: string;
  icon?: IconName;
  options: RegisterOptions<T>;
}

interface FormSelect<T> extends Omit<SelectProps, "name"> {
  name: keyof T;
  options: RegisterOptions<T>;
}

interface FormRadioGroup<T> extends Omit<RadioGroupProps, "name"> {
  name: keyof T;
  options: RegisterOptions<T>;
}
