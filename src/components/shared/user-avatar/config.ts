import { IIcon } from "../../UI/Icon";

type btn = {
  text: string;
  icon: IIcon["icon"];
  href: string;
};

export const buttons: btn[] = [
  { text: "Home", icon: "home", href: "/" },
  { text: "Dashboard", icon: "dashboard", href: "/app" },
];
