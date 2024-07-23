import { Thunk } from "../types";
import type { User as UserImpl } from "firebase/auth";
import { userSliceActions as U } from "../_user-slice";
import { globalSliceActions as G } from "../_global-slice";
import { enqueueSnackbar } from "notistack";
import UserAPI from "../../API/User";
import LocalStorageAPI from "../../API/LocalStorage";

export const onLoginUser: Thunk<UserImpl> = (user) => async (dispatch) => {
  dispatch(G.toggleInProgress(true));

  try {
    if (!user) throw new Error("Invalid user durning authenticating process");
    const guest = user?.isAnonymous && LocalStorageAPI.getGuestData;
    const accessToken = await user.getIdToken();

    const userData = guest
      ? await UserAPI.getLocalUser()
      : await UserAPI.getUser(user.uid);

    // TODO: "2024-07-22T21:31:45.241Z"
    console.log(new Date(userData.base.birthDate));

    dispatch(U.setUser({ accessToken, userData }));
    enqueueSnackbar("Sucessfully Loged In", { variant: "success" });
    if (guest) enqueueSnackbar("Local Demo Account", { variant: "warning" });
  } catch (err) {
    throw err;
  }
};
