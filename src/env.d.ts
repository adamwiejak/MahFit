/// <reference types="vite/client" />
declare module "*.scss";
declare module "*.js";
declare module "*.ts";
declare module "*d.ts";
declare module "*.svg";

// interface Window {
//   _myProps: { };
// }

type Ref<T> = React.MutableRefObject<T>;
type Tween = (...args: any) => [gsap.core.Timeline, () => void];

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
