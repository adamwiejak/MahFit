import { LoginUserData } from "../../../../API/User";
import { emailRegEx } from "../../../../helpers/data/regex";
import { passwordRegEx } from "../../../../helpers/data/regex";
import { required } from "../../../../helpers/data/regex";
import { FormInput } from "../../../../types/forms";

export interface FormData extends LoginUserData {}

export const inputs: FormInput<FormData>[] = [
  {
    name: "email",
    icon: "user",
    label: "Email Adress *",
    registerOptions: { ...emailRegEx, ...required },
  },

  {
    name: "password",
    label: "Password *",
    type: "password",
    icon: "unlock",
    registerOptions: { ...passwordRegEx, ...required },
  },
];
