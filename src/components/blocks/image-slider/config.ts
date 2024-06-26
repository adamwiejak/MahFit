import { gsap, gsapDuration, gsapEasing } from "../../../utils/Gsap/config";

const { standard, longer, test } = gsapDuration;
const { circ } = gsapEasing;

export const swapImage: Tween = (
  imageContainerRef: React.RefObject<HTMLElement>,
  goTo: number
) => {
  const imgs = Array.from(imageContainerRef.current!.children);
  const tl = gsap.timeline({ defaults: { ease: circ, duration: longer } });

  tl.to(imgs, {
    xPercent: (idx) => (goTo - idx) * -100,
    scale: (idx) => (idx === goTo ? 1 : 0.9),
  });

  const cleanUp = () => {
    tl.kill();
  };

  return [tl, cleanUp];
};
