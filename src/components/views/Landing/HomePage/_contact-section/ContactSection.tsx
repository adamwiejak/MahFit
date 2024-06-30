import * as styled from "./constat-section.styled";
import { BoxProps } from "@mui/material";
import SignupForm from "../../../../shared/forms/signup-form/SignupForm";
import Image from "../../../../shared/image/Image";
import { workoutImageAsset } from "../../../../../assets/images/workout/asset";

const ContactSection: React.FC<BoxProps> = (props) => {
  return (
    <styled.Section component="section" {...props}>
      <Image background imageAsset={workoutImageAsset} />

      <SignupForm />
    </styled.Section>
  );
};

export default ContactSection;
