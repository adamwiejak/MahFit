import { IconName } from "../../UI/Icon";

type Btn = { icon: IconName; href: string };

export const btns: Btn[] = [
  { icon: "home", href: "/home" },
  // { icon: "settings", href: "/app/settings" },
  { icon: "dashboard", href: "/app" },
];
