import { useEffect } from "react";
import { Auth } from "../utils/Firebase";
import { getUserSlice, useAppDispatch } from "../store/Store";
import { onLoginUser, onLogoutUser } from "../store/_user-slice";
import { NextOrObserver, User } from "firebase/auth";
import UserAPI from "../API/User";
import { useSnackbar } from "notistack";
import LocalStorageAPI from "../API/LocalStorage";
import { globalSliceActions as G } from "../store/_global-slice";

const useUserObserver = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const { accessToken: loggedIn } = getUserSlice();

  useEffect(() => {
    const observer: NextOrObserver<User> = async (user) => {
      try {
        if (user) {
          await dispatch(onLoginUser(user));
          enqueueSnackbar("Sucessfully Loged In", { variant: "success" });
        }

        if (!user && loggedIn) {
          await dispatch(onLogoutUser());
          enqueueSnackbar("Sucessfully Loged Out", { variant: "info" });
        }
      } catch (err: any) {
        UserAPI.logoutUser();
        enqueueSnackbar(err.message, { variant: "error" });
      } finally {
        dispatch(G.toggleInProgress(false));
      }
    };

    return Auth.authStateObserver(observer);
  }, [LocalStorageAPI, UserAPI, loggedIn]);
};

export default useUserObserver;
