import { recordFromArray } from "../../../../helpers/functions/functions";
import * as mockups from "../../../../helpers/data/mockups";
import * as helpers from "../../../../helpers/data/regex";
import { SinginUserData } from "../../../../utils/User/types";

export type InputName = Partial<keyof SinginUserData>[];

export const inputs: FormInput<SinginUserData>[] = [
  {
    name: "nickname",
    label: "Nickname *",
    icon: "user",
    options: { ...helpers.nameRegEx, ...helpers.required },
  },
  {
    name: "email",
    label: "Email Adress *",
    icon: "user",
    options: { ...helpers.emailRegEx, ...helpers.required },
  },

  {
    name: "password",
    label: "Password *",
    type: "password",
    icon: "unlock",
    options: { ...helpers.passwordRegEx, ...helpers.required },
  },
  {
    name: "repeatPassword",
    label: "Repeat Password *",
    type: "password",
    icon: "unlock",
    options: { ...helpers.passwordRegEx, ...helpers.required },
  },
];

export const selects: FormSelect<SinginUserData>[] = [
  {
    name: "year",
    label: "Year",
    inputs: recordFromArray(mockups.years),
    options: { ...helpers.required },
  },
  {
    name: "month",
    label: "Month",
    options: { ...helpers.required },
    inputs: recordFromArray(mockups.months),
  },
  {
    name: "day",
    label: "Day",
    options: { ...helpers.required },
    inputs: recordFromArray(mockups.monthDays),
  },
];

export const radioGroup: FormRadioGroup<SinginUserData> = {
  name: "gender",
  label: "Your Gender",
  options: { ...helpers.required },
  inputs: recordFromArray(mockups.genders),
};
