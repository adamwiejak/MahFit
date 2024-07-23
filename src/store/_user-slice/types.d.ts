import { User } from "../../API/User";

export type UserSlice = {
  userData: User | null;
  accessToken: undefined | string | null;
};

export type SetUserAction = {
  userData: User;
  accessToken: UserSlice["accessToken"];
};
