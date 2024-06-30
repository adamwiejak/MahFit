import { BoxProps } from "@mui/material";
import * as styled from "./features-section.styled";

const FeaturesSection: React.FC<BoxProps> = (props) => {
  const { ...rest } = props;

  return <styled.Section component="section" {...rest}></styled.Section>;
};

export default FeaturesSection;
