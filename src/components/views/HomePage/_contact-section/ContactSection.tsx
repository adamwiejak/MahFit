import * as styled from "./.styles";
import SignupForm from "../../../shared/forms/signup-form/SignupForm";
import Image from "../../../shared/image/Image";
import { bodybulidrImageasset } from "../../../../assets/images/bodybulider/asset";

const ContactSection: React.FC = (props) => {
  return (
    <styled.Section component="section" {...props}>
      <styled.CardBox elevation={20}>
        <Image imageAsset={bodybulidrImageasset} />

        <styled.Glass sx={{ gridColumn: "2/-1" }}>
          <SignupForm />
        </styled.Glass>
      </styled.CardBox>
    </styled.Section>
  );
};

export default ContactSection;
