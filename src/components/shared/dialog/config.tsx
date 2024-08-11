import React from "react";
import { Grow, Zoom, Slide } from "@mui/material";
import type { SlideProps } from "@mui/material";
import type { ZoomProps } from "@mui/material";
import type { GrowProps } from "@mui/material";

const GrowTransitionComponent = React.forwardRef<unknown, GrowProps>(
  (props, ref) => <Grow {...props} ref={ref} />
);
const ZoomTransitionComponent = React.forwardRef<unknown, ZoomProps>(
  (props, ref) => <Zoom {...props} ref={ref} />
);
const SlideTransitionComponent = React.forwardRef<unknown, SlideProps>(
  (props, ref) => <Slide {...props} ref={ref} direction="up" />
);

const transitionComponentMap = {
  zoom: ZoomTransitionComponent,
  grow: GrowTransitionComponent,
  slide: SlideTransitionComponent,
};

export type Transition = keyof typeof transitionComponentMap;

export const getTransitionComponent = (transition?: Transition) => {
  return transitionComponentMap[transition || "grow"];
};

export const shakeTween: Tween = (dialogRef: Ref<HTMLElement>) => {
  const tl = gsap.timeline({ defaults: {} });

  const cleanup = () => {};

  return { tl, cleanup };
};
