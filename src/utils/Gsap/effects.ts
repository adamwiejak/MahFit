import { gsap, gsapDuration, gsapEasing } from "./index";

export const faintin = {
  name: "faintIn",
  effect: (target: any) => gsap.fromTo(target, { autoAlpha: 0, y: "5vh" }, { autoAlpha: 1, y: 0 }),
};

export const shake = {
  name: "shake",
  effect: (target: gsap.TweenTarget) => {
    const tl = gsap.timeline({
      defaults: {
        ease: gsapEasing.bounce,
        duration: gsapDuration.shorter,
      },
    });

    tl.to(target, { scale: 1.07, rotateZ: 5 })
      .to(target, { scale: 0.98, rotateZ: -5 })
      .to(target, { scale: 1.03, rotateZ: 2 })
      .to(target, { scale: 1, rotateZ: 0 });

    return tl;
  },
};

export const upDown = {
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
};
