import * as styled from "./styles";
import gsap from "gsap";
import React, { useRef } from "react";
import { Divider, type DialogProps } from "@mui/material";
import { getTransitionComponent, type Transition } from "./config";

interface IDialog extends Omit<DialogProps, "TransitionComponent"> {
  title?: string;
  transition?: Transition;
  variant?: "obligatory" | "important" | undefined;
}

const Dialog: React.FC<IDialog> = (props) => {
  const { title, onClose, variant, children, transition, ...rest } = props;
  const dialogElRef = useRef<HTMLDivElement>(null);

  function shakeContent() {
    const content = dialogElRef.current?.children[2];
    gsap.effects.shake(content).play(0);
  }

  function closeHandler(e: MouseEvent | KeyboardEvent) {
    const reason = e.type === "click" ? "backdropClick" : "escapeKeyDown";
    if (variant === "obligatory") return shakeContent();

    if (reason === "backdropClick" && variant === "important") {
      return shakeContent();
    }
    if (onClose) onClose({}, reason);
  }

  function onCloseIconClick() {
    onClose!({}, "escapeKeyDown");
  }

  return (
    <styled.Dialog
      ref={dialogElRef}
      onClose={closeHandler}
      TransitionComponent={getTransitionComponent(transition)}
      {...rest}
    >
      <styled.Header>
        {title && (
          <styled.Title color="primary" variant="h5">
            {title}
          </styled.Title>
        )}

        {variant !== "obligatory" && (
          <styled.CloseIcon
            icon="close"
            color="secondary"
            onClick={onCloseIconClick}
          />
        )}
      </styled.Header>

      <Divider variant="middle" />

      <styled.Content>{children}</styled.Content>
    </styled.Dialog>
  );
};

export default Dialog;
