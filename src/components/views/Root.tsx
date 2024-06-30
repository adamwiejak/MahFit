import { Outlet } from "react-router-dom";
import { isDev } from "../../store/Store";
import DevButtons from "../../_dev_tests/dev-buttons/DevButtons";
import GlobalLoader from "../modals/global-loader/GlobalLoader";
import useUserObserver from "../../hooks/useUserObserver";

const Root: React.FC = () => {
  useUserObserver();

  return (
    <>
      <Outlet />
      <GlobalLoader />
      {isDev && <DevButtons />}
    </>
  );
};

export default Root;
