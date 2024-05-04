import { spacing } from "../../../styles/MUI/_spacing";
import { gsap, gsapDuration, gsapEasing } from "../../../utils/Gsap/config";

export const shrinkHeaderTwen: Tween = (barRef: Ref<HTMLDivElement>) => {
  const barEl = barRef.current;
  const [logoEl, navigationEl] = barEl.children;
  const tl = gsap.timeline({ scrollTrigger: { scrub: 1, end: innerHeight } });

  tl.to([barEl, navigationEl, logoEl], {
    gap: spacing[4],
    minHeight: spacing[0],
    padding: `${spacing[2]} ${spacing[3]}`,
  }).to(barEl, { backdropFilter: "brightness(0.45) blur(10px)" }, "<");

  const cleanUp = () => {
    tl.scrollTrigger?.kill();
    tl.revert();
  };

  return [tl, cleanUp];
};

export const showHeaderTwen: Tween = (barRef: Ref<HTMLDivElement>) => {
  const barEl = barRef.current;

  const tl = gsap.timeline({
    scrollTrigger: { innerHeight, toggleActions: "none none play none" },
    defaults: { ease: gsapEasing.circ, duration: gsapDuration.standard },
  });

  tl.fromTo(barEl, { yPercent: -120 }, { yPercent: 0 });
  setTimeout(() => tl.play(), 300);

  const onWheel = (e: any) => {
    const delta = e.deltaY;
    if (delta > 0) tl.play();
    if (delta < 0 && scrollY > innerHeight / 2) tl.reverse();
  };

  document.addEventListener("wheel", onWheel);

  const cleanUp = () => {
    tl.revert();
    tl.scrollTrigger?.kill();
    document.removeEventListener("wheel", onWheel);
  };

  return [tl, cleanUp];
};
