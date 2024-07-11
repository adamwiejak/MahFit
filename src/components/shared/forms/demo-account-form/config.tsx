import { nameRegEx, required } from "../../../../helpers/data/regex";

export interface FormData {
  nickname: string;
  photo: FileList;
}

export const inputs: FormInput<FormData>[] = [
  {
    name: "nickname",
    label: "Nickname *",
    icon: "user",
    options: {
      ...nameRegEx,
      required: { value: true, message: "Type your nickname" },
    },
  },
];

export const paragraphs = [
  <>
    You are logging in to a <span>demo-account</span>, althoug it still needs
    network connetcion to provide you all app features.
  </>,

  <>
    Demo account leverages <span>local-storage</span>. It's all temporary and
    all data will be <span>lost permanently</span> when you log out.
  </>,

  <></>,

  <>
    Demo acoount comes with predefied dummy <span>friends/users/workouts </span>
    to provide you full app experience.
  </>,
];
