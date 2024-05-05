import gsap from "gsap";
import { AuthTask } from "../../../API/User";

export const swapAuthForm: Tween = (
  task: AuthTask,
  wrapperRef: Ref<HTMLElement>,
  firstRunRef: Ref<boolean>
) => {
  const wrapperEl = wrapperRef.current;
  const [header, forms, button] = wrapperEl.children;
  const [loginFormEl, signupFormEl] = forms.children;
  const buttonEl = button.children[0];

  const tl = gsap.timeline({ ease: "power4.inOut" });

  if (task === "login") {
    tl.to(forms, { scale: 1.25 })
      .to(header, { text: "Log In To An Existing Account" }, "<+25%")
      .to(buttonEl, { text: "Create New Account" }, "<")
      .to(loginFormEl, { rotateY: 0 }, "<+40%")
      .to(signupFormEl, { rotateY: -180 }, "<")
      .to(signupFormEl, { height: loginFormEl.clientHeight }, "<")
      .to(forms, { scale: 1, ease: "bounce" }, "<+70%");
  }

  if (task === "signup") {
    tl.to(forms, { scale: 1.25 })
      .to(header, { text: "Create Brand New Account" }, "<+25%")
      .to(buttonEl, { text: "I Have Account Already" }, "<")
      .to(loginFormEl, { rotateY: 180 }, "<+40%")
      .to(signupFormEl, { rotateY: 0 }, "<")
      .to(signupFormEl, { height: "auto" }, "<")
      .to(forms, { scale: 1, ease: "bounce" }, "<+70%");
  }

  if (firstRunRef.current) {
    tl.progress(1);
    firstRunRef.current = false;
  }

  const cleanUp = () => {
    tl.kill();
  };

  return [tl, cleanUp];
};
