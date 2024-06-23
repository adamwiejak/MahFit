import React, { useLayoutEffect, useRef } from "react";

const useTween = (tween: Tween, deps: React.DependencyList = []) => {
  const tlRef = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const { tl, cleanup } = tween();
    tlRef.current = tl;
    return cleanup;
  }, deps);

  return tlRef;
};

export default useTween;
