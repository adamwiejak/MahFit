import gsap from "gsap";
import { Path, FieldValues, UseFormReturn } from "react-hook-form";
import { refNotAttachedResponse } from "../responses";

//  prettier-ignore
export const pipe = (...fns:any[]) => (x:any) => fns.reduce((f, g) => g(f), x);
//  prettier-ignore
export const compose = (...fns:any[]) => (x:any) => fns.reduce((f, g) => f(g), x);

export function getScrolledY(scrollerEl = document.body) {
  const { top, height } = scrollerEl.getBoundingClientRect();
  const distance = height - innerHeight;

  return {
    scrolled: -top, //px
    fraction: -(top / distance).toFixed(2), // 0-1
    vhTimes: -(top / innerHeight).toFixed(2), // 0-...
  };
}

export function excludeStyledProps(excludedProps: PropertyKey[]) {
  const shouldForwardProp = (prop: PropertyKey) =>
    !excludedProps.includes(prop);

  return shouldForwardProp;
}

export function scrollIntoView(
  container: gsap.TweenTarget,
  to: ScrollToPlugin.Vars["y"]
) {
  const offsetY = window.innerHeight / 3;
  gsap.to(container, { scrollTo: { y: to } });
}

export function recordFromArray(values: string[]) {
  const records: Record<string, string> = {};
  values.forEach((value) => (records[value] = value));
  return records;
}

export function onFormInputClear<T extends FieldValues>(
  form: Omit<UseFormReturn<T>, "formState">,
  inputName: Path<T>
) {
  return () => {
    form.resetField!(inputName);
    form.setFocus!(inputName);
  };
}

export function compareStrings(strings: string[], phraze: string) {
  return strings.some((string) =>
    string.toLocaleLowerCase().includes(phraze.toLowerCase())
  );
}
