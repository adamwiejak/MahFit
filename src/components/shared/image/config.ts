import { gsap, gsapDuration, gsapEasing } from "../../../utils/Gsap";
const { stamp } = gsapEasing;
const { long } = gsapDuration;

export const rmeoveOverlayTween = (containerRef: Ref<HTMLDivElement>) => {
  const containerEl = containerRef.current;
  const overlay = Array.from(containerEl.children).at(-1)!;

  const tl = gsap.timeline({
    defaults: { ease: stamp, duration: long },
  });

  return tl.to(overlay, { opacity: 0 }, "<");
};
