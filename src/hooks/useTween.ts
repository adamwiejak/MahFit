import React, { useLayoutEffect, useRef } from "react";

const useTween = (tween: Tween, deps: React.DependencyList = []) => {
  const tlRef = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const [tl, cleanUp] = tween();
    tlRef.current = tl;
    return cleanUp;
  }, deps);

  return tlRef;
};

export default useTween;
