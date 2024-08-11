import { Friend, Gender, Lift, Records, Uid, WorkoutType } from "../../../API/User";

export type WorkoutData = {
  author: Uid;
  uid: string;
  title: string;
  start: string /*stringified Date*/;
  type: WorkoutType;
};

export type UserData = {
  isDummy: boolean;
  base: {
    uid: Uid;
    email: string;
    gender: Gender;
    nickname: string;
    photoURL: string | undefined;
    birthDate: string /*stringified Date*/;
  };
  details?: Partial<{
    records: Records;
    friendsList: Friend[];
    workouts: WorkoutData[];
  }>;
};
