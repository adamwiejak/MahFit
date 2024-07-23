import { Gender } from "../../API/User";
import { gendersMockup } from "../../helpers/data/mockups";
import { nameRegEx, required } from "../../helpers/data/regex";
import { FormInput, FormRadioGroup } from "../../types/forms";

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
    registerOptions: { ...nameRegEx, ...required },
  },

  {
    name: "photoURL",
    label: "PhotoURL *",
    icon: "image",
    registerOptions: { ...required },
  },
];
export const radioGroup: FormRadioGroup<FormData> = {
  name: "gender",
  label: "Your Gender",
  registerOptions: { ...required },
  options: gendersMockup,
};
