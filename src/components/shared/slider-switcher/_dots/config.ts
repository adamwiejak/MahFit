import gsap from "gsap";
import { gsapEasing } from "../../../../utils/Gsap/config";

export const dotsTween: Tween = (
  barRef: Ref<HTMLElement>,
  currValue: number
) => {
  const dots = barRef?.current.children;

  const tl = gsap.timeline({
    defaults: {
      duration: 0.1,
      stagger: 0.05,
      ease: gsapEasing.circ,
    },
  });

  tl.to(dots, {
    opacity: (idx) => (currValue >= idx ? 1 : 0.4),
    scale: (idx) => (currValue >= idx ? 1.15 : 0.95),
  });

  const cleanup = () => {
    tl.kill();
  };

  return { tl, cleanup };
};
