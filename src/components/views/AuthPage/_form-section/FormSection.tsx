import * as styled from "./styles";
import { workoutImageAsset } from "../../../../assets/images/workout/asset";
import useRouteData from "../../../../hooks/useRouteData";
import AuthForm from "../../../blocks/auth-form/AuthForm";
import Image from "../../../shared/image/Image";
import { AuthTask } from "../../../../API/User";
import { getUserSlice } from "../../../../store/Store";
import { Navigate } from "react-router-dom";

const FormSection = () => {
  const authTask = useRouteData<AuthTask>();
  const { accessToken } = getUserSlice();

  return (
    <styled.Section component="section">
      <Image
        background
        sx={{ position: "fixed" }}
        imageAsset={workoutImageAsset}
      />
      {accessToken ? <Navigate to="/app" /> : <AuthForm task={authTask} />}
    </styled.Section>
  );
};

export default FormSection;
