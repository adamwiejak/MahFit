import { IIcon } from "../../UI/Icon";

type btn = {
  text: string;
  icon: IIcon["icon"];
  href: string;
};

export const buttons: btn[] = [
  // { text: "Add Workout", icon: "add", href: "/" },
  { text: "Set Avatar", icon: "image", href: "/" },
  // { text: "Dashboard", icon: "dashboard", href: "/app" },
];
