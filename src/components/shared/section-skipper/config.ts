type ButtonAsset = {
  match: string;
  text: string;
  href: string;
};

export const navButtons: ButtonAsset[] = [
  { match: "home", text: "home", href: "/home" },
  { match: "asd", text: "intro", href: "/about" },
  { match: "asd", text: "features", href: "/about" },
  { match: "about", text: "about", href: "/about" },
  { match: "about", text: "contact", href: "/about" },
];
