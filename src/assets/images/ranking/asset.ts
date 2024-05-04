import { ResponsiveImageAsset } from "../../../classes/ResponsiveImage";
import ranking_sx from "./ranking_123.jpg";
import ranking_lg from "./ranking_612.jpg";

export const rankingImageAsset: ResponsiveImageAsset = {
  alt: "Ranking Image ",
  images: [
    { src: ranking_sx, width: 123 },
    { src: ranking_lg, width: 612 },
  ],
};
