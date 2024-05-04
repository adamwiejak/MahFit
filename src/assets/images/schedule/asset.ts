import { ResponsiveImageAsset } from "../../../classes/ResponsiveImage";
import lg from "./schedule_922.jpg";
import xs from "./schedule_185.jpg";

export const scheduleImageAsset: ResponsiveImageAsset = {
  alt: "schedule_image_asset",
  images: [
    { src: lg, width: 922 },
    { src: xs, width: 185 },
  ],
};
