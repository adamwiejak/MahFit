import { dietImageAsset } from "../../../../assets/images/diet/asset";
import { exerciseImageAsset } from "../../../../assets/images/exercise/asset";
import { scheduleImageAsset } from "../../../../assets/images/schedule/asset";
import { workoutImageAsset } from "../../../../assets/images/workout/asset";
import { ResponsiveImageAsset } from "../../../../classes/ResponsiveImage";
import { gsap, gsapDuration, gsapEasing } from "../../../../utils/Gsap/config";

export const enterTween: Tween = (sectionRef: Ref<HTMLElement>) => {
  const sectionEl = sectionRef.current;
  const [header1El, header2El] = sectionEl.children[1]?.children;

  const tl = gsap.timeline({
    defaults: {
      stagger: 0.3,
      ease: gsapEasing.circ,
      duration: gsapDuration.longer,
    },
  });

  tl.fromTo(
    [header1El, header2El],
    { scale: 0.85, opacity: 0 },
    { opacity: 1, scale: 1 }
  );

  const cleanUp = () => {
    tl.revert();
  };

  return [tl, cleanUp];
};

export const onScrollTween: Tween = (sectionRef: Ref<HTMLElement>) => {
  const sectionEl = sectionRef.current;
  const sliderEl = sectionEl?.children[0];
  const [headersBox, actionBox] = sectionEl?.children[3].children;

  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: 0.2,
      pin: sliderEl,
      trigger: sectionEl,
      end: "bottom 30%",
      start: "bottom bottom",
    },
  });

  tl.to(headersBox.children, {
    xPercent: (idx) => (idx === 0 ? -20 : 20),
    opacity: 0,
  })
    .to(actionBox, { opacity: 0, yPercent: 300 }, "<")
    .to(sliderEl, { filter: "blur(5px)" }, "<");

  const cleanUp = () => {
    tl.scrollTrigger?.kill();
    tl.revert();
  };

  return [tl, cleanUp];
};

export const images: ResponsiveImageAsset[] = [
  dietImageAsset,
  workoutImageAsset,
  scheduleImageAsset,
  exerciseImageAsset,
  dietImageAsset,
  workoutImageAsset,
  scheduleImageAsset,
  exerciseImageAsset,
];
