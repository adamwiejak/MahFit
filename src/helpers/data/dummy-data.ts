import { User, Workout } from "../../API/User/types";
import { todayPlusDays } from "../functions/dummy-functions";

export const DUMMY_IMAGE_1 =
  "data:image/jpeg;base64,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";

export const DUMMY_IMAGE_2 =
  "data:image/jpeg;base64,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";

export const DUMMY_ACCOUNT = {
  email: "guest@example.com",
  password: "test1234.",
};

export const DUMMY_FORMS_VALUES: any = {
  email: "example@email.com",
  nickname: "ExampleNickname",
  password: "Passwoord123.",
  repeatPassword: "Passwoord123.",
  gender: "male",
  month: "December",
  year: "1996",
  day: "13",
};

export const DUMMY_USERS: User[] = [];

export const DUMMY_EVENTS: Workout[] = [
  { title: "event 1", date: todayPlusDays(-11), color: "red" },
  { title: "event 2", date: todayPlusDays(-9), color: "red" },
  { title: "event 3", date: todayPlusDays(-5), color: "red" },
  { title: "event 4", date: todayPlusDays(-1), color: "blue" },
  { title: "event 5", date: todayPlusDays(2), color: "green" },
  { title: "event 6", date: todayPlusDays(4), color: "green" },
  { title: "event 7", date: todayPlusDays(11), color: "green" },
  { title: "event 8", date: todayPlusDays(8), color: "green" },
  { title: "event 9", date: todayPlusDays(23), color: "yellow" },
];
