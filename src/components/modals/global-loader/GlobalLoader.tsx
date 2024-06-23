import * as styled from "./styled";
import { getGlobalSlice } from "../../../store/Store";
import Dialog from "../dialog/Dialog";

const GlobalLoader: React.FC = () => {
  const { inProgress } = getGlobalSlice();

  return (
    <Dialog
      open={inProgress}
      transition="zoom"
      role="global-loader"
      variant="obligatory"
    >
      <styled.Spinner />
    </Dialog>
  );
};

export default GlobalLoader;
