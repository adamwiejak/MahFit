import { gsap, gsapDuration, gsapEasing } from "../../../utils/Gsap/config";

const { stamp } = gsapEasing;
const { standard, test, shortest, long } = gsapDuration;

export const showImageTween: Tween = (containerRef: Ref<HTMLDivElement>) => {
  const containerEl = containerRef.current;
  const overlay = Array.from(containerEl.children).at(-1)!;

  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: stamp, duration: long },
  });

  tl.to(overlay, { opacity: 0 }, "<");

  const cleanUp = () => {
    tl.kill();
  };

  return [tl, cleanUp];
};
