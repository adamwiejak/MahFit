import UserAPI from "../API/User";
import { useSnackbar } from "notistack";
import { useAppDispatch } from "../store";
import { useEffect } from "react";
import Auth from "../utils/Firebase/auth";
import { onLoginUser, onLogoutUser } from "../store/thunks";
import { globalSliceActions as G } from "../store/_global-slice";

const useUserObserver = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const unsubscribe = Auth.authStateObserver(async (user) => {
      try {
        if (!user) await dispatch(onLogoutUser());
        if (user) await dispatch(onLoginUser(user));
      } catch (err: any) {
        UserAPI.logoutUser();
        enqueueSnackbar(err.message, { variant: "error" });
      } finally {
        dispatch(G.toggleInProgress(false));
      }
    });

    return unsubscribe;
  }, [UserAPI, Auth]);
};

export default useUserObserver;
