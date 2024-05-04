import { ResponsiveImageAsset } from "../../../classes/ResponsiveImage";
// import xs from "../avatars/avatar-male.png";
import xs from "./bodybuider_184.png";
import lg from "./bodybuider_920.png";

export const bodybulidrImageasset: ResponsiveImageAsset = {
  alt: "body bulider image",
  images: [
    { src: lg, width: 920 },
    { src: xs, width: 184 },
  ],
};
