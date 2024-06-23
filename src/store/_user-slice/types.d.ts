import { User } from "../../API/User";

export type UserSlice = {
  userData: User | null;
  accessToken: string | null;
};

export type SetUserAction = {
  accessToken: UserSlice["accessToken"];
  userData: UserSlice["userData"];
};
