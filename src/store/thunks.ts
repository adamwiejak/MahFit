import type { User as UserImpl } from "firebase/auth";
import { Thunk } from "./types";
import { userSliceActions as U } from "./_user-slice";
import { globalSliceActions as G } from "./_global-slice";
import LocalStorageAPI from "../API/LocalStorage";
import { enqueueSnackbar } from "notistack";
import UserAPI from "../API/User";

export const onLoginUser: Thunk<UserImpl> = (user) => async (dispatch) => {
  const guest = LocalStorageAPI.getLocalUser();
  dispatch(G.toggleInProgress(true));

  try {
    if (!user) throw new Error("Invalid user when authenticating");

    const accessToken = await user.getIdToken();
    const userData = guest
      ? await UserAPI.createLocalUser(user)
      : await UserAPI.getUserFromDB(user.uid);

    dispatch(U.setUser({ accessToken, userData }));
    if (guest) enqueueSnackbar("Local Demo Account", { variant: "warning" });
  } catch (err: unknown) {
    throw err;
  }
};

export const onLogoutUser: Thunk = () => async (dispatch) => {
  dispatch(G.toggleInProgress(true));

  try {
    dispatch(U.clearUser());
  } catch (err: unknown) {
    throw err;
  }
};
