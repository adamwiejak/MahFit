import * as regEx from "../../../../helpers/data/regex";
import { FormInput, FormRadioGroup } from "../../../../types/forms";
import { gendersMockup } from "../../../../helpers/data/mockups";
import { SinginData } from "../../../../API/User";

export interface FormData extends SinginData {
  repeatPassword: string;
}

export type InputName = Partial<keyof FormData>[];

export const inputs: FormInput<FormData>[] = [
  {
    icon: "user",
    name: "nickname",
    label: "Nickname *",
    registerOptions: { ...regEx.nameRegEx, ...regEx.required },
  },
  {
    name: "email",
    icon: "user",
    label: "Email Adress *",
    registerOptions: { ...regEx.emailRegEx, ...regEx.required },
  },

  {
    icon: "unlock",
    name: "password",
    type: "password",
    label: "Password *",
    registerOptions: { ...regEx.passwordRegEx, ...regEx.required },
  },
  {
    icon: "unlock",
    type: "password",
    name: "repeatPassword",
    label: "Repeat Password *",
    registerOptions: { ...regEx.passwordRegEx, ...regEx.required },
  },
];

export const radioGroup: FormRadioGroup<FormData> = {
  name: "gender",
  label: "Your Gender",
  options: gendersMockup,
  registerOptions: { ...regEx.required },
};
