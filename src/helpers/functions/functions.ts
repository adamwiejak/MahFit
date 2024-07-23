import gsap from "gsap";

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
  // const offsetY = window.innerHeight / 3;
  gsap.to(container, { scrollTo: { y: to } });
}

export function recordFromArray(values: (string | number)[]) {
  const record: Record<string, string | number> = {};

  values.forEach((value) => {
    if (typeof value === "number") {
      record[value] = value;
    } else {
      const label = value.charAt(0).toUpperCase() + value.slice(1);
      record[value] = label;
    }
  });
  return record;
}

export function disasebleDate(date: Date) {
  const day = date.getDate();
  const weekDay = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return { day, weekDay, month, year };
}

// export function renderLoremIpsum(paragraphsAmount: number) {
//   const paragraph = `Sint Lorem irure aliquip cupidatat esse ad elit magna nulla. Amet ipsum officia excepteur ut aliqua duis commodo commodo. Commodo et eu ex anim laborum aliqua amet amet commodo reprehenderit aliquip velit reprehenderit. Ea ullamco elit Lorem dolor ad est elit sint. Est et adipisicing exercitation nisi cupidatat cillum.`;
//   const array = [];
//   for (let i = 0; i < paragraphsAmount; i++) {
//     array.push(paragraph);
//   }
//   return array.join();
// }

export function randomNumberBetween(min: number, max: number) {
  return Math.round(Math.random() * (max - min)) + min;
}

export async function awaitTime(time: number) {
  await new Promise((resolve) => setTimeout(resolve, time));
}

export function compareStrings(phraze: string, strings: string[]) {
  function procedString(string: string) {
    return string.toLowerCase().trim();
  }

  return strings.some((string) =>
    procedString(string).includes(procedString(phraze))
  );
}
