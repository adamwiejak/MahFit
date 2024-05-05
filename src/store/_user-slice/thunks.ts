import { globalSliceActions as G } from "../_global-slice/slice";
import { userSliceActions as U } from "./slice";
import { enqueueSnackbar } from "notistack";
import { awaitTime } from "../../helpers/functions/dummy-functions";
import type { User as UserImpl } from "firebase/auth";
import { Thunk } from "../types";
import UserAPI from "../../API/User";
import LocalStorage from "../../API/LocalStorage";

export const onLoginUser: Thunk<UserImpl> = (user) => async (dispatch) => {
  dispatch(G.setInProgress(true));
  const guest = LocalStorage.getLocalUser();
  const authToken = await user!.getIdToken();

  try {
    const userData = await UserAPI.getUserFromDB(user!.uid);

    if (guest) {
      enqueueSnackbar("Locall Demo Account", { variant: "warning" });
      // DUMMY_FRIENDS.forEach((friend) => {
      //   const { base, isFav } = friend;
      //   user.details?.friendsList?.push({ uid: base.uid, isFav: isFav });
      // });
    }

    dispatch(U.setUser({ authToken, userData }));
    enqueueSnackbar("User Sucessfully Logged In", { variant: "success" });
  } catch (err: any) {
  } finally {
    dispatch(G.setInProgress(false));
  }
};

export const onLogoutUser: Thunk = () => async (dispatch, getState) => {
  if (!getState().userSlice.userData) return;
  const guest = LocalStorage.getLocalUser();
  dispatch(G.setInProgress(true));

  try {
    await awaitTime(250); //let loader fully enter
    dispatch(U.clearUser());
    if (guest) LocalStorage.removeLocalUser();
    enqueueSnackbar("Successfully Logged Out");
  } catch (err: any) {
    enqueueSnackbar(err.message, { variant: "warning" });
  } finally {
    dispatch(G.setInProgress(false));
  }
};
