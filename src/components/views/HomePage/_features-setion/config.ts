import gsap from "gsap";

export const pinBackround: Tween = (sectionRef: Ref<HTMLElement>) => {
  const sectionEl = sectionRef.current;
  const [backgrounEl] = sectionEl.children;

  const tl = gsap.timeline({
    scrollTrigger: {
      start: "top bottom",
      end: "bottom top",
      trigger: sectionEl,
      pin: backgrounEl,
      pinSpacing: false,
    },
  });

  //   tl.set(backgrounEl, { yPercent: -100 });

  const cleanUp = () => {
    tl.scrollTrigger?.kill();
    tl.revert();
  };

  return [tl, cleanUp];
};
