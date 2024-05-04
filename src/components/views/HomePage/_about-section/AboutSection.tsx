import { ISection } from "../../../layout/section/SectionLayout";
import * as styled from "./about-seciton.styled";

const AboutSection: React.FC<ISection> = (props) => {
  return <styled.Section {...props}></styled.Section>;
};

export default AboutSection;
