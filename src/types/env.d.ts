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
type AuthTask = "login" | "signup" | "logout";
