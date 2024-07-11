import { Thunk } from "../types";
import { userSliceActions as U } from "../_user-slice";
import { globalSliceActions as G } from "../_global-slice";
import { enqueueSnackbar } from "notistack";

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
