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

type ResponsiveImageAsset = {
  alt?: string;
  images: { src: string; width: number }[];
};

type Tween = (...args: any) => {
  cleanup?: () => void;
  tl: gsap.core.Timeline;
};
