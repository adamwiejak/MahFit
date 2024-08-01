import User from "../../classes/User";

export type Uid = string;
export type Gender = "female" | "male" | "other";
export type Friend = { uid: Uid; isFav: boolean };
export type Lift = "benchPress" | "deadLift" | "squat";
export type WorkoutType = "push" | "pull" | "legs" | "upper" | "custom";

export type WorkoutData = {
  author: Uid;
  uid: string;
  title: string;
  type: WorkoutType;
  start: string /*stringified Data*/;
};

export type AuthTask = "login" | "signup";
export type CachedUserData = Omit<UserBaseInfo, "uid">;
export type GuestData = { image: string; gender: Gender; nickname: string };

export type UserBaseInfo = {
  uid: Uid;
  email: string;
  gender: Gender;
  nickname: string;
  birthDate: string;
  photoURL: string | undefined;
};

export type UserDetailsInfo = {
  friendsList: Friend[];
  workouts: WorkoutData[];
  records: Partial<Record<Lift, number>>;
};

export type UserData = {
  isDummy: boolean;
  base: UserBaseInfo;
  details?: Partial<UserDetailsInfo>;
};

export interface SinginUserData
  extends Omit<UserBaseInfo, "uid" | "birthDate"> {
  date: Date;
  password: string;
}

export type LoginUserData = {
  password: string;
  email: string;
};
