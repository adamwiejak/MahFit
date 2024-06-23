import gsap from "gsap";
import { transitions } from "../../styles/MUI/_transitions";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Draggable);
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export const gsapDuration: (typeof transitions)["duration"] = Object.entries(
  transitions.duration
).reduce((durations: any, [key, value]) => {
  durations[key] = value / 1000;
  return durations;
}, {});

export const gsapEasing = {
  ...transitions.easing,
  stamp: "power4.inOut",
  circ: "circ.easeInOut",
  elastic: "elastic",
  bounce: "bounce",
  text: 5,
};

gsap.registerEffect({
  name: "faintIn",
  effect: (target: any) =>
    gsap.fromTo(target, { autoAlpha: 0, y: "5vh" }, { autoAlpha: 1, y: 0 }),
});

gsap.registerEffect({
  name: "shake",
  effect: (target: gsap.TweenTarget) => {
    const tl = gsap.timeline({
      defaults: {
        ease: gsapEasing.elastic,
        duration: gsapDuration.shorter,
      },
    });

    tl.to(target, { scale: 1.2, rotateZ: 15 })
      .to(target, { scale: 0.9, rotateZ: -15 })
      .to(target, { scale: 1.1, rotateZ: 10 })
      .to(target, { scale: 1, rotateZ: 0 });

    return tl;
  },
});

gsap.registerEffect({
  name: "upDown",
  effect: (target: gsap.DOMTarget, vars: gsap.TweenVars) => {
    const tl = gsap.timeline({
      defaults: {
        yoyo: true,
        repeat: -1,
        duration: gsapDuration.standard,
        ...vars,
      },
    });

    return tl.to(target, { yPercent: -15 }).to(target, { yPercent: 10 });
  },
});

export * from "gsap/gsap-core";
export { ScrollTrigger, Draggable };
