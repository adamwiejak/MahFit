import { useEffect } from "react";
import { Auth } from "../utils/Firebase";
import { useAppDispatch } from "../store/Store";
import { useNavigate } from "react-router-dom";
import { onLoginUser, onLogoutUser } from "../store/_user-slice";
import { NextOrObserver, User } from "firebase/auth";
import UserAPI from "../API/User";
import { useSnackbar } from "notistack";
import LocalStorage from "../API/LocalStorage";

const useUserObserver = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const observer: NextOrObserver<User> = async (user) => {
    const quest = LocalStorage.getLocalUser();
    const currUser = UserAPI.getCurrentUser();
    const alreadyLogged = quest || currUser;

    try {
      if (user) {
        await dispatch(onLoginUser(user));
        enqueueSnackbar("User Sucessfully Logged In", { variant: "success" });
      }

      if (!user) {
        dispatch(onLogoutUser());
        enqueueSnackbar("Successfully Logged Out", { variant: "info" });
      }
    } catch (err: any) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };

  useEffect(() => {
    const unsubscripe = Auth.authStateObserver(observer);
    return unsubscripe;
  }, []);
};

export default useUserObserver;
