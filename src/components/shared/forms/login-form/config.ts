import { LoginUserData } from "../../../../API/User/types";
import {
  emailRegEx,
  required,
  passwordRegEx,
} from "../../../../helpers/data/regex";
import { BoxProps } from "@mui/material";

export interface LoginFormProps extends BoxProps {}

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
