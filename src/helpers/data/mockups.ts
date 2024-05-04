import { Gender, Lift } from "../../utils/User/types";
import { IconName } from "../../assets/icons/iconsAsset";

export const lifts: Lift[] = ["benchPress", "deadLift", "squat"];

export const workoutsCategorys: { type: string; icon: IconName }[] = [
  { type: "Push", icon: "benchPress" },
  { type: "Pull", icon: "deadLift" },
  { type: "Legs", icon: "squat" },
  { type: "Cardio", icon: "cardio" },
];

export const genders: Gender[] = ["female", "male", "other"];

export const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthDays = new Array(31)
  .fill(1)
  .map((el, idx) => idx + 1)
  .map((el) => el.toString());

export const years = new Array(80)
  .fill(1)
  .map((el, idx) => new Date().getFullYear() - idx)
  .map((el) => el.toString());
