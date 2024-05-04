import * as styled from "./styles";
import FormSection from "./_form-section/FormSection";
import { useRef } from "react";

const AuthPage = () => {
  const formSectionRef = useRef<HTMLElement>(null);

  return (
    <styled.Page ref={formSectionRef}>
      <FormSection />
    </styled.Page>
  );
};

export default AuthPage;
