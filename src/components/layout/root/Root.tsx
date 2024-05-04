import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../../store/Store";
import { onLoginUser, onLogoutUser } from "../../../store/_user-slice/thunks";
import Auth from "../../../utils/Firebase/auth";
import DevButtons from "../../../_dev_tests/components/dev-buttons/DevButtons";
import GlobalLoader from "../../modals/global-loader/GlobalLoader";

const Root: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return Auth.authStateObserver((User) => {
      if (!User) dispatch(onLogoutUser());
      if (User) dispatch(onLoginUser(User));
    });
  }, []);

  return (
    <>
      <Outlet />
      <GlobalLoader />
      <DevButtons />
    </>
  );
};

export default Root;
