import styled from "./styles";
import Footer from "../../blocks/footer/Footer";
import NoMatch from "../../shared/no-match/NoMatch";
import Header from "../../blocks/app-header/AppHeader";

const NoFoundPage = () => {
  return (
    <>
      <styled.NoPage>
        <styled.Main>
          <NoMatch sx={{ backdropFilter: "brightness(0.55)" }} />
        </styled.Main>
      </styled.NoPage>

      <Footer />
    </>
  );
};

export default NoFoundPage;
