import { UserData, WorkoutData } from "../../utils/Firebase/database/types";

////// base
export type Uid = string;
export type Gender = "male" | "female" | "other";
export type Friend = { uid: string; isFav: boolean };
export type Lift = "benchPress" | "deadLift" | "squat";
export type LiftRecords = { [timestamp: number]: number };
export type WorkoutType = "push" | "pull" | "legs" | "upper" | "custom";

export type Records = Map<Lift, LiftRecords>;

////// Auth data flow
export type AuthTask = "login" | "signup";
export type LoginData = { password: string; email: string };
export interface SinginData extends Omit<UserBaseInfo, "uid"> {
  password: string;
}

////// User
export type UserBaseInfo = UserData["base"];
export type UserDetails = UserData["details"];
