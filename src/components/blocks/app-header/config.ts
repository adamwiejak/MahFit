import { connectStorageEmulator } from "firebase/storage";
import { spacing } from "../../../styles/MUI/_spacing";
import {
  gsap,
  gsapDuration,
  gsapEasing,
  ScrollTrigger,
} from "../../../utils/Gsap/config";

const backdrop = "brightness(0.45) blur(10px)";

export const shrinkHeaderTwen: Tween = (barRef: Ref<HTMLDivElement>) => {
  const barEl = barRef.current;
  const [logoEl, , navigationEl] = barEl.children;

  const tl = gsap.timeline({
    scrollTrigger: { scrub: 0.8, end: 0.9 * innerHeight },
  });

  tl.to([barEl, navigationEl, logoEl], {
    gap: spacing[3],
    padding: `${spacing[1]} ${spacing[2]}`,
  }).to(barEl, { backdropFilter: backdrop }, "<");

  const cleanUp = () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };

  return [tl, cleanUp];
};

export const showHeaderTwen: Tween = (barRef: Ref<HTMLDivElement>) => {
  const barEl = barRef.current;

  const tl = gsap.timeline({
    defaults: { ease: gsapEasing.circ, duration: gsapDuration.standard },
  });

  tl.fromTo(barEl, { yPercent: -120 }, { yPercent: 0 });

  const onUpdate = (trigger: ScrollTrigger) => {
    const { direction, end, progress } = trigger;
    const offset = end * progress > innerHeight;
    if (direction > 0 || !offset) tl.play();
    if (direction < 0 && offset) tl.reverse();
  };

  const scrollTrigger = ScrollTrigger.create({ onUpdate });

  const cleanUp = () => {
    tl.kill();
    scrollTrigger.kill();
  };

  return [tl, cleanUp];
};
