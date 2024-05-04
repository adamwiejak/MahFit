import type { ResponsiveImageAsset } from "../../../classes/ResponsiveImage";
import xs from "./diet_150.jpg";
import sm from "./diet_1200.jpg";
import md from "./diet_1800.jpg";
import lg from "./diet_2400.jpg";
import xl from "./diet_3000.jpg";

export const dietImageAsset: ResponsiveImageAsset = {
  alt: "diet bg image",
  images: [
    { src: xs, width: 300 },
    { src: sm, width: 1200 },
    { src: md, width: 1800 },
    { src: lg, width: 2400 },
    { src: xl, width: 3000 },
  ],
};
