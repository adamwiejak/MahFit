export type Gender = "female" | "male" | "other";
export type PersonalRecords = Record<Lift, number>;
export type Lift = "benchPress" | "deadLift" | "squat";
export type AuthTask = "login" | "signup" | "logout";

export interface SinginUserData {
  nickname: string;
  email: string;
  password: string;
  repeatPassword: string;
  gender: Gender;
  month: string;
  year: string;
  day: string;
}

export interface LoginUserData {
  password: string;
  email: string;
}

export interface Workout {
  title: string;
  date: string;
  color: string;
}

export interface UserBaseInfo {
  uid: string;
  email: string;
  gender: Gender;
  nickname: string;
}

export interface UserDetailsInfo {
  photoURL: string;
  workouts: Workout[];
  personalRecords: Partial<PersonalRecords>;
  friendsList: { uid: string; isFav: boolean }[];
}

export interface User {
  base: UserBaseInfo;
  details?: Partial<UserDetailsInfo>;
}
