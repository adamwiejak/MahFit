export type Gender = "female" | "male" | "other";
export type PersonalRecords = Record<Lift, number>;
export type Lift = "benchPress" | "deadLift" | "squat";
export type AuthTask = "login" | "signup";

export type GuestData = {
  image: string;
  gender: Gender;
  nickname: string;
};

export type SinginUserData = {
  nickname: string;
  email: string;
  password: string;
  gender: Gender;
  birthDate: Date;
};

export type LoginUserData = {
  password: string;
  email: string;
};

export type Workout = {
  title: string;
  date: string;
  color: string;
  passed: boolean;
};

export type UserBaseInfo = {
  uid: string;
  email: string;
  gender: Gender;
  nickname: string;
  // TODO: stringifi date  Date.Local string
  birthDate: Date;
};

export type UserDetailsInfo = Partial<{
  photoURL: string;
  workouts: Workout[];
  personalRecords: Partial<PersonalRecords>;
  friendsList: { uid: UserBaseInfo["uid"]; isFav: boolean }[];
}>;

// export type User = {
//   isDummy?: boolean;
//   base: UserBaseInfo;
//   details?: UserDetailsInfo;
//   // settings?: Partial<UserSettings>;
// };
