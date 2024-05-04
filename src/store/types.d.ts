import { User } from "../utils/User/types";
import store from "./Store";

type ThunkFunction = (
  dispatch: AppDispatch,
  getStore: () => RootState
) => Promise<void | RootState>;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type Thunk<P = unknown> = (payload?: P) => ThunkFunction;

export interface GlobalSlice {
  inProgress: boolean;
  isOnline: Boolean | undefined;
  theme: "light" | "dark" | undefined;
}

export interface UserSlice {
  authToken: string | null;
  userData: User | null;
  cachedFriends: Record<string, User & { isFav: boolean }>;
}
