import { getScrolledY } from "../../helpers/functions/functions";
import { gsap, gsapDuration, gsapEasing } from "../../utils/Gsap/config";

export const toggleButtonTween: Tween = (
  btnRef: Ref<HTMLButtonElement>,
  enterOffset = 0.25
) => {
  const tl = gsap.timeline({
    paused: true,
    defaults: { duration: gsapDuration.short, ease: gsapEasing.circ },
  });

  tl.fromTo(btnRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 });

  const onScrol = () => {
    const { fraction } = getScrolledY();
    if (fraction > enterOffset - enterOffset * 0.02) tl.play();
    if (fraction < enterOffset) tl.reverse();
  };

  document.addEventListener("scroll", onScrol);

  const cleanup = () => {
    tl.kill();
    tl.scrollTrigger?.kill();
    document.removeEventListener("scroll", onScrol);
  };

  return { tl, cleanup };
};
