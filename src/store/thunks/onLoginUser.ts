import { Thunk } from "../types";
import type { User as UserImpl } from "firebase/auth";
import { userSliceActions as U } from "../_user-slice";
import { globalSliceActions as G } from "../_global-slice";
import { enqueueSnackbar } from "notistack";
import UserAPI from "../../API/User";
import LocalStorageAPI from "../../API/LocalStorage";

export const onLoginUser: Thunk<UserImpl> = (user) => async (dispatch) => {
  const guest = user?.isAnonymous && LocalStorageAPI.getGuestData;

  try {
    dispatch(G.toggleInProgress(true));
    if (!user) throw new Error("Invalid user durning authenticating process");

    const accessToken = await user.getIdToken();
    const userData = guest
      ? await UserAPI.getLocalUser()
      : await UserAPI.getUserFromDB(user.uid);

    dispatch(U.setUser({ accessToken, userData }));
    enqueueSnackbar("Sucessfully Loged In", { variant: "success" });
    if (guest) enqueueSnackbar("Local Demo Account", { variant: "warning" });
  } catch (err: unknown) {
    throw err;
  }
};
