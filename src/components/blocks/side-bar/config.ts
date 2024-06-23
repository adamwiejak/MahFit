import gsap from "gsap";
import { CardProps } from "@mui/material";
import { gsapDuration } from "../../../utils/Gsap/config";

export interface SideBarProps extends CardProps {}

export const openSideBar: Tween = (barRef: Ref<HTMLElement>) => {
  let manuallyClosed = false;
  const barEl = barRef.current!;
  const closeBtnEl = barEl.children[0].children[2];
  const tl = gsap.timeline({ duration: gsapDuration.standard });

  tl.fromTo(barEl, { xPercent: -100 }, { xPercent: 0 });

  const onScroll = () => {
    if (scrollY < 100 && !manuallyClosed) tl.play();
    if (scrollY > 100) {
      tl.reverse();
      manuallyClosed = false;
    }
  };

  const onBtnClose = () => {
    tl.reverse();
    manuallyClosed = true;
  };

  document.addEventListener("scroll", onScroll);
  closeBtnEl!.addEventListener("click", onBtnClose);

  const cleanup = () => {
    document.removeEventListener("scroll", onScroll);
    closeBtnEl!.removeEventListener("click", onBtnClose);
    tl.revert();
  };

  return { tl, cleanup };
};
