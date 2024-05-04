import { RegisterOptions } from "react-hook-form";
import {
  emailRegEx,
  required,
  passwordRegEx,
} from "../../../../helpers/data/regex";
import { IconName } from "../../../../assets/icons/iconsAsset";
import { InputProps } from "../../../primitives/Input";

export interface CreateDemoAccountProps {}

export interface FormData {
  email: string;
  password: string;
}

interface FormInput extends Omit<InputProps, "name"> {
  icon: IconName;
  name: keyof FormData;
  options: RegisterOptions<FormData>;
}

export const inputs: FormInput[] = [
  {
    name: "email",
    label: "Email Adress *",
    icon: "user",
    options: { ...emailRegEx, ...required },
  },

  {
    name: "password",
    label: "Password *",
    type: "password",
    icon: "unlock",
    options: { ...passwordRegEx, ...required },
  },
];

export const paragraphs = [
  "You are logging in to a demo account, it is locall account but it inclueds all features, so it still needs network connetcion.",
  "It leverages cookies to preserve data between browser sesions. Changes will be applayed only locally and will be lost when you logged out.",
  "It sheres the same database as regular account, but dont send any data to servers.",
  "It comes with predefied dummy friends/users/workouts. You can manipulate them as you wish.",
  "You can dubble-click on unactive button bellow to make it active.",
  "If you are `ulana kurwa jebana` you can not blame app developers for leak of your cuting effects. Just stop eat kebabs fatty boy.",
];
