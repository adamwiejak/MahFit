import * as styled from "./.styles";
import { workoutImageAsset } from "../../../assets/images/workout/asset";
import { Navigate, useLoaderData } from "react-router-dom";
import AuthForm from "../../blocks/auth-form/AuthForm";
import { AuthTask } from "../../../API/User";
import { getUserSlice } from "../../../store";

const AuthPage = () => {
  const { accessToken } = getUserSlice();
  const authTask = useLoaderData() as AuthTask;

  return (
    <styled.Page>
      <styled.Background imageAsset={workoutImageAsset} />
      {accessToken ? <Navigate to="/app" replace /> : <AuthForm task={authTask} />}
    </styled.Page>
  );
};

export default AuthPage;
