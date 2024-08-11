import { Outlet } from "react-router-dom";
import useUserObserver from "../../../hooks/useUserObserver";
import GlobalLoader from "../../shared/global-loader/GlobalLoader";
import DevButtons from "../../../_dev_tests/dev-buttons/DevButtons";
import { isDev } from "../../../store";
import { Box } from "@mui/material";

const Root: React.FC = () => {
  useUserObserver();

  return (
    <Box sx={{ backgroundColor: "background.paper" }}>
      <Outlet />
      <GlobalLoader />
      {isDev && <DevButtons />}
    </Box>
  );
};

export default Root;
