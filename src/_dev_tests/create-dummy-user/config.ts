import { Gender } from "../../API/User";
import { genders } from "../../helpers/data/mockups";
import { emailRegEx, nameRegEx, required } from "../../helpers/data/regex";
import { recordFromArray } from "../../helpers/functions/functions";

export interface FormData {
  nickname: string;
  gender: Gender;
  photoURL: string;
}

export const inputs: FormInput<FormData>[] = [
  {
    name: "nickname",
    label: "Nickname *",
    icon: "user",
    options: { ...nameRegEx, ...required },
  },

  {
    name: "photoURL",
    label: "PhotoURL *",
    icon: "image",
    options: { ...required },
  },
];

export const radioGroup: FormRadioGroup<FormData> = {
  name: "gender",
  label: "Your Gender",
  options: { ...required },
  inputs: recordFromArray(genders),
};
