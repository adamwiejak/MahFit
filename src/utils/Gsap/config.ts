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

export * from "gsap/gsap-core";
