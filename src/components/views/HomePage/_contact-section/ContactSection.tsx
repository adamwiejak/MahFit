import * as styled from "./constat-section.styled";
import ResponsiveImage from "../../../shared/image/Image";
import { bodybulidrImageasset } from "../../../../assets/images/bodybulider/asset";
import SignupForm from "../../../shared/forms/signup-form/SignupForm";
import { ISection } from "../../../layout/section/SectionLayout";

const ContactSection: React.FC<ISection> = (props) => {
  return (
    <styled.Section {...props}>
      <ResponsiveImage imageAsset={bodybulidrImageasset} />
      <SignupForm sx={{ p: 10, alignSelf: "center" }} />
    </styled.Section>
  );
};

export default ContactSection;
