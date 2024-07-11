import UserAPI from "../API/User";
import { Auth } from "../utils/Firebase";
import { useSnackbar } from "notistack";
import { useAppDispatch } from "../store";
import { useEffect } from "react";
import { onLoginUser, onLogoutUser } from "../store/thunks";
import { useNavigate } from "react-router-dom";
import { globalSliceActions as G } from "../store/_global-slice";

const useUserObserver = () => {
  const navigate = useNavigate();
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
