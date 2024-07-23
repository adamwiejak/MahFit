/// <reference types="vite/client" />

declare module "*.scss";
declare module "*.js";
declare module "*.ts";
declare module "*d.ts";
declare module "*.svg";

// interface Window {
//   _myProps: { };
// }

type Theme = "light" | "dark" | undefined;

type Ref<T> = React.MutableRefObject<T>;

type Tween = (...args: any) => {
  cleanup?: () => void;
  tl: gsap.core.Timeline;
};

interface IContextProvider {
  children: JSX.Element | JSX.Element[];
}
