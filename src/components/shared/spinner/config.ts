import { gsap } from "../../../utils/Gsap/config";
import { gsapDuration } from "../../../utils/Gsap/config";
import { gsapEasing } from "../../../utils/Gsap/config";

export const openSpinerTween = (backdropRef: React.RefObject<HTMLElement>) => {
  const backdropEl = backdropRef.current;
  const spiner = backdropEl?.children[0]!;

  const tl = gsap.timeline({
    defaults: {
      ease: gsapEasing.easeOut,
      duration: gsapDuration.standard,
    },
  });

  tl.fromTo(backdropEl, { opacity: 0 }, { opacity: 1 }).fromTo(
    spiner,
    { scale: 0 },
    { scale: 1 },
    "<"
  );

  return { tl };
};
