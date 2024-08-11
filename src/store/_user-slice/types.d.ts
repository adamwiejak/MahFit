import { UserData } from "../../utils/Firebase/database";

export type UserSlice = {
  userData: UserData | null;
  accessToken: undefined | string | null;
};

export type SetUserAction = {
  userData: UserData;
  accessToken: UserSlice["accessToken"];
};
