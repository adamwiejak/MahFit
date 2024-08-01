import * as styled from "./styles";
import Image from "../../shared/image/Image";
import Footer from "../../blocks/footer/Footer";
import NoMatch from "../../shared/no-match/NoMatch";
import { noFoundImageAsset } from "../../../assets/images/404/asset";

const NoFoundPage = () => {
  return (
    <styled.NoPage>
      <Image background imageAsset={noFoundImageAsset} />
      <NoMatch sx={{ backdropFilter: "brightness(0.55)" }} />
      <Footer />
    </styled.NoPage>
  );
};

export default NoFoundPage;
