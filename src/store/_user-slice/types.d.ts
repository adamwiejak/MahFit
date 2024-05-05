import { User } from "../../API/User";

export type UserSlice = {
  user: User | null;
  authToken: string | null;
  cachedFriends: Record<string, User & { isFav: boolean }>;
};

export type SetUserAction = PayloadAction<{
  authToken: UserSlice["authToken"];
  user: UserSlice["user"];
}>;
