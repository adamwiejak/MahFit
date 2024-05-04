import { ResponsiveImageAsset } from "../../../classes/ResponsiveImage";
// import xs from "./workout_260.jpg";
import xs from "../avatars/avatar-female.png";
import lg from "./workout_1300.jpg";

export const workoutImageAsset: ResponsiveImageAsset = {
  alt: "workout_image_asset",
  images: [
    { src: lg, width: 1300 },
    { src: xs, width: 260 },
  ],
};
