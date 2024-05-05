import type { User as UserImpl } from "firebase/auth";
import { Thunk } from "../types";
import UserAPI from "../../API/User";
import { userSliceActions as U } from ".";
import { globalSliceActions as G } from "../_global-slice";

export const onLoginUser: Thunk<UserImpl> = (user) => async (dispatch) => {
  dispatch(G.setInProgress(true));
  const authToken = await user!.getIdToken();
  try {
    const userData = await UserAPI.getUserFromDB(user!.uid);
    dispatch(U.setUser({ authToken, user: userData }));
  } catch (err: unknown) {
    throw err;
  } finally {
    dispatch(G.setInProgress(false));
  }
};

export const onLogoutUser: Thunk = () => async (dispatch) => {
  dispatch(G.setInProgress(true));
  try {
    dispatch(U.clearUser());
  } catch (err: unknown) {
    throw err;
  } finally {
    dispatch(G.setInProgress(false));
  }
};
