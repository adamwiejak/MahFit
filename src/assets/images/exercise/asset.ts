import { ResponsiveImageAsset } from "../../../classes/ResponsiveImage";
import lg from "./exercise_1920.jpg";
import xs from "./exercise_384.jpg";

export const exerciseImageAsset: ResponsiveImageAsset = {
  alt: "exercise image",
  images: [
    { src: lg, width: 900 },
    { src: xs, width: 384 },
  ],
};
