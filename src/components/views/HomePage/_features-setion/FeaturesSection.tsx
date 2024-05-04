import { ISection } from "../../../layout/section/SectionLayout";
import * as styled from "./features-section.styled";

const FeaturesSection: React.FC<ISection> = (props) => {
  const { ...rest } = props;

  return <styled.Section {...rest}></styled.Section>;
};

export default FeaturesSection;
