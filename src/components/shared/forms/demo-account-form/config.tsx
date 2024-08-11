import { Gender } from "../../../../API/User";
import { gendersMockup } from "../../../../helpers/data/mockups";
import { nameRegEx, required } from "../../../../helpers/data/regex";
import { FormInput, FormSelect } from "../../../../types/forms";

export interface DemoAccountFormData {
  gender: Gender;
  nickname: string;
  photo: FileList;
}

export const selects: FormSelect<DemoAccountFormData>[] = [
  {
    name: "gender",
    label: "Gender",
    options: gendersMockup,
    registerOptions: { ...required },
  },
];

export const inputs: FormInput<DemoAccountFormData>[] = [
  {
    icon: "user",
    name: "nickname",
    label: "Nickname *",
    registerOptions: { ...nameRegEx, ...required },
  },
];

export const paragraphs = [
  <>
    You are logging in to a <span>demo-account</span>, it is local acount but still needs network connetcion to provide
    you all app features.
  </>,

  <>
    Demo account leverages <span>local-storage</span>. It's all temporary. Saved local data and account itself are{" "}
    <span>permanently removed</span> when you log out.
  </>,

  <></>,

  <>
    Demo acoount comes with predefied dummy <span>friends/users/workouts </span>
    to provide you full app experience. Feel <span>free to play</span> with it.
  </>,
];
