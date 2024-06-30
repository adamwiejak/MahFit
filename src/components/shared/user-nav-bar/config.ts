import { IconName } from "../../UI/Icon";

type Btn = { icon: IconName; href: string };

export const btns: Btn[] = [
  { icon: "settings", href: "/app/settings" },
  { icon: "home", href: "/home" },
  { icon: "dashboard", href: "/app" },
];
