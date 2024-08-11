import { Gender, Lift, WorkoutType } from "../../API/User";
import { IconName } from "../../components/UI/Icon";

export const liftsMockup: Lift[] = ["squat", "deadLift", "benchPress"];

export const workoutTypesMockup: WorkoutType[] = [
  "push",
  "pull",
  "legs",
  "upper",
  "custom",
];

export const gendersMockup: Record<string, Gender> = {
  Female: "female",
  Male: "male",
  Other: "other",
};

export const workoutsMockup: { name: string; icon: IconName; color: string }[] =
  [
    { name: "Cardio", icon: "cardio", color: "green" },
    { name: "Push", icon: "benchPress", color: "red" },
    { name: "Legs", icon: "squat", color: "pink" },
    { name: "Pull", icon: "deadLift", color: "blue" },
  ];

export const weekDaysMockup = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthsMockup = [
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

export const yearsMockup = new Array(100)
  .fill(1)
  .map((_, idx) => (new Date().getFullYear() - idx).toString());
