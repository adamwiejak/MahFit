import { ISection } from "../../../layout/section/SectionLayout";
import * as styled from "./intro-section.styled";

const IntroSection: React.FC<ISection> = (props) => {
  return <styled.Section {...props}></styled.Section>;
};

export default IntroSection;
