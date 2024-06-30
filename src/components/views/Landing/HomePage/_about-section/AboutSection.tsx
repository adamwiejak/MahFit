import { BoxProps } from "@mui/material";
import * as styled from "./about-seciton.styled";

const AboutSection: React.FC<BoxProps> = (props) => {
  return <styled.Section component="section" {...props}></styled.Section>;
};

export default AboutSection;
