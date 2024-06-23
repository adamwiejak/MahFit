export type Gender = "female" | "male" | "other";
export type PersonalRecords = Record<Lift, number>;
export type Lift = "benchPress" | "deadLift" | "squat";
export type AuthTask = "login" | "signup";

export type SinginDemoUserData = {
  nickname: string;
  gender: Gender;
  image: File;
};

export type SinginUserData = {
  nickname: string;
  email: string;
  password: string;
  repeatPassword: string;
  gender: Gender;
  month: string;
  year: string;
  day: string;
};

export type LoginUserData = {
  password: string;
  email: string;
};

export type Workout = {
  title: string;
  date: string;
  color: string;
};

export type UserBaseInfo = {
  uid: string;
  email: string;
  gender: Gender;
  nickname: string;
};

export type UserDetailsInfo = {
  photoURL: string;
  workouts: Workout[];
  personalRecords: Partial<PersonalRecords>;
  friendsList: { uid: string; isFav: boolean }[];
};

export type User = {
  base: UserBaseInfo;
  details?: Partial<UserDetailsInfo>;
};

// export declare function getUserFromDB(uid: string): Promise<User>;
