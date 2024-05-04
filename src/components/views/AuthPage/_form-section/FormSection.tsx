import * as styled from "./styles";
import { workoutImageAsset } from "../../../../assets/images/workout/asset";
import useRouteData from "../../../../hooks/useRouteData";
import AuthForm from "../../../blocks/auth-form/AuthForm";
import Image from "../../../shared/image/Image";
import { AuthTask } from "../loaders";

const FormSection = () => {
  const authTask = useRouteData<AuthTask>();

  return (
    <styled.Section component="section">
      <Image imageAsset={workoutImageAsset} background />
      {authTask !== "logout" && <AuthForm task={authTask} />}
    </styled.Section>
  );
};

export default FormSection;
