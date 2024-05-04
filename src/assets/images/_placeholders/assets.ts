import { type ResponsiveImageAsset } from "../../../classes/ResponsiveImage";

import _3to1_xl from "./placeholder_3-1_1980px.jpg";
import _3to1_lg from "./placeholder_3-1_1300px.jpg";
import _3to1_md from "./placeholder_3-1_900px.jpg";
import _3to1_sm from "./placeholder_3-1_600px.jpg";
import _3to1_xs from "./placeholder_3-1_300px.jpg";

import _16to9_xl from "./placeholder_16-9_1980px.jpg";
import _16to9_lg from "./placeholder_16-9_1300px.jpg";
import _16to9_md from "./placeholder_16-9_900px.jpg";
import _16to9_sm from "./placeholder_16-9_600px.jpg";
import _16to9_xs from "./placeholder_16-9_300px.jpg";

import _6to13_xl from "./placeholder_6-13_1980px.jpg";
import _6to13_lg from "./placeholder_6-13_1300px.jpg";
import _6to13_md from "./placeholder_6-13_900px.jpg";
import _6to13_sm from "./placeholder_6-13_600px.jpg";
import _6to13_xs from "./placeholder_6-13_300px.jpg";

export const imagePlaceHolder_3to1Asset: ResponsiveImageAsset = {
  alt: "image placeholder 3:1",
  images: [
    { src: _3to1_xl, width: 1980 },
    { src: _3to1_lg, width: 1300 },
    { src: _3to1_md, width: 900 },
    { src: _3to1_sm, width: 600 },
    { src: _3to1_xs, width: 300 },
  ],
};

export const imagePlaceHolder_16to9Asset: ResponsiveImageAsset = {
  alt: "image placeholder 16:9",
  images: [
    { src: _16to9_xl, width: 1980 },
    { src: _16to9_lg, width: 1300 },
    { src: _16to9_md, width: 900 },
    { src: _16to9_sm, width: 600 },
    { src: _16to9_xs, width: 300 },
  ],
};

export const imagePlaceHolder_6to13Asset: ResponsiveImageAsset = {
  images: [
    { src: _6to13_xl, width: 1980 },
    { src: _6to13_lg, width: 1300 },
    { src: _6to13_md, width: 900 },
    { src: _6to13_sm, width: 600 },
    { src: _6to13_xs, width: 300 },
  ],
  alt: "image placeholder 6:13",
};
