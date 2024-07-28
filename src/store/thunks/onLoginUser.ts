import { Thunk } from "../types";
import type { User as UserImpl } from "firebase/auth";
import { userSliceActions as U } from "../_user-slice";
import { globalSliceActions as G } from "../_global-slice";
import { enqueueSnackbar } from "notistack";
import UserAPI from "../../API/User";
import LocalStorageAPI from "../../API/LocalStorage";

export const onLoginUser: Thunk<UserImpl> = (userImpl) => async (dispatch) => {
  dispatch(G.toggleInProgress(true));

  try {
    const guest = userImpl!.isAnonymous && LocalStorageAPI.getGuestData;
    const accessToken = await userImpl!.getIdToken();

    const userData = guest
      ? await UserAPI.getLocalUser()
      : await UserAPI.getUser(userImpl!.uid);

    if (!userData) throw new Error(`No ${guest && "Guest"} User  Data found`);

    dispatch(U.setUser({ accessToken, userData }));
    enqueueSnackbar("Sucessfully Loged In", { variant: "success" });
    if (guest) enqueueSnackbar("Local Demo Account", { variant: "warning" });
  } catch (err) {
    throw err;
  }
};
