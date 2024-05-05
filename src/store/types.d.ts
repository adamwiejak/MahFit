import { User } from "../API/User/types";
import store from "./Store";

type ThunkFunction = (
  dispatch: AppDispatch,
  getStore: () => RootState
) => Promise<void | RootState>;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type Thunk<P = unknown> = (payload?: P) => ThunkFunction;
