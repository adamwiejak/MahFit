import gsap from "gsap";
import { transitions } from "../../styles/MUI/_transitions";
import { faintin, shake, upDown } from "./effects";

/////////////////////////////////////////////////////////////////////////////////

export const gsapDuration: (typeof transitions)["duration"] = Object.entries(transitions.duration).reduce(
  (durations: any, [key, value]) => {
    durations[key] = value / 1000;
    return durations;
  },
  {}
);

export const gsapEasing = {
  ...transitions.easing,
  stamp: "power4.inOut",
  circ: "circ.easeInOut",
  elastic: "elastic",
  bounce: "bounce",
};

gsap.registerEffect(faintin);
gsap.registerEffect(shake);
gsap.registerEffect(upDown);
