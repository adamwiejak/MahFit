import { LoginUserData } from "../../../../API/User/types";
import { emailRegEx } from "../../../../helpers/data/regex";
import { passwordRegEx } from "../../../../helpers/data/regex";
import { required } from "../../../../helpers/data/regex";

export const inputs: FormInput<LoginUserData>[] = [
  {
    name: "email",
    icon: "user",
    label: "Email Adress *",
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
