import * as styled from "./.styles";
import { getGlobalSlice } from "../../../store";
import Dialog from "../dialog/Dialog";

const GlobalLoader: React.FC = () => {
  const { inProgress } = getGlobalSlice();

  return (
    <Dialog open={inProgress} transition="zoom" role="global-loader" variant="obligatory">
      <styled.Spinner />
    </Dialog>
  );
};

export default GlobalLoader;
