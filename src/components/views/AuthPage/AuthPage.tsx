import * as styled from "./styles";
import FormSection from "./_form-section/FormSection";
import { getUserSlice } from "../../../store/Store";
import { Navigate } from "react-router-dom";

const AuthPage = () => {
  const { authToken } = getUserSlice();

  return (
    <styled.Page>
      {authToken ? <Navigate to="/app" /> : <FormSection />}
    </styled.Page>
  );
};

export default AuthPage;
