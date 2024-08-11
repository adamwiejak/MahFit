import xs from "./texture.jpg";
import lg from "./texture.jpg";

export const texturesImageAsset: ResponsiveImageAsset = {
  alt: "image placeholder 3:1",
  images: [
    { src: lg, width: 900 },
    { src: xs, width: 384 },
  ],
};
