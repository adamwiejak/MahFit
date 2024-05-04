import gsap from "gsap";
import styled from "./styles";
import React from "react";
import { Grow, Zoom, Slide } from "@mui/material";
import type { SlideProps } from "@mui/material";
import type { ZoomProps } from "@mui/material";
import type { GrowProps } from "@mui/material";
import type { DialogProps } from "@mui/material";

interface CustomDialogProps extends Omit<DialogProps, "TransitionComponent"> {
  transitionComponent?: "grow" | "zoom" | "slide";
}

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

const Dialog: React.FC<CustomDialogProps> = (props) => {
  const {
    open,
    children,
    transitionComponent = "grow",
    onClose,
    ...rest
  } = props;

  const closeHandler = (e: MouseEvent | KeyboardEvent) => {
    if (onClose)
      onClose({}, e.type === "click" ? "backdropClick" : "escapeKeyDown");
    if (!onClose) {
      const content = gsap.utils.selector(e.currentTarget!)(
        ".MuiDialog-paper"
      )[0];
      gsap.effects.shake(content).play(0);
    }
  };

  return (
    <styled.Dialog
      open={open}
      disablePortal
      onClose={closeHandler}
      TransitionComponent={transitionComponentMap[transitionComponent]}
      {...rest}
    >
      {children}
    </styled.Dialog>
  );
};

export default Dialog;
