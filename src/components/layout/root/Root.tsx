import { Outlet } from "react-router-dom";
import DevButtons from "../../../_dev_tests/components/dev-buttons/DevButtons";
import GlobalLoader from "../../modals/global-loader/GlobalLoader";
import useUserObserver from "../../../hooks/useUserObserver";
import { isDev } from "../../../store/Store";

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
