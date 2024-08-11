import { AuthTask } from "../../../../API/User";
import { getUserSlice } from "../../../../store";
import AuthForm from "../../../blocks/auth-form/AuthForm";
import * as styled from "./.styled";
import { Navigate, useLoaderData } from "react-router-dom";

const FormSection = () => {
  const { accessToken } = getUserSlice();
  const authTask = useLoaderData() as AuthTask;
  console.log(authTask);

  return (
    <styled.Section component="section">
      {accessToken ? <Navigate to="/app" replace /> : <AuthForm task={authTask} />}
    </styled.Section>
  );
};

export default FormSection;
