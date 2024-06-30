import type { User as UserImpl } from "firebase/auth";
import { Thunk } from "./types";
import { userSliceActions as U } from "./_user-slice";
import { globalSliceActions as G } from "./_global-slice";
import { enqueueSnackbar } from "notistack";
import UserAPI from "../API/User";

export const onLoginUser: Thunk<UserImpl> = (user) => async (dispatch) => {
  dispatch(G.toggleInProgress(true));
  const guest = user?.isAnonymous;

  try {
    if (!user) throw new Error("Invalid user durning authenticating process");

    const accessToken = await user.getIdToken();
    const userData = guest
      ? await UserAPI.getLocalUser()
      : await UserAPI.getUserFromDB(user.uid);

    dispatch(U.setUser({ accessToken, userData }));
    enqueueSnackbar("Sucessfully Loged In", { variant: "success" });
    if (guest) enqueueSnackbar("Local Demo Account", { variant: "info" });
  } catch (err: unknown) {
    throw err;
  }
};

export const onLogoutUser: Thunk = () => async (dispatch, getStore) => {
  const { accessToken } = getStore().userSlice;

  dispatch(G.toggleInProgress(true));
  try {
    dispatch(U.clearUser());
    if (accessToken) {
      enqueueSnackbar("Sucessfully Loged Out", { variant: "info" });
    }
  } catch (err: unknown) {
    throw err;
  }
};
