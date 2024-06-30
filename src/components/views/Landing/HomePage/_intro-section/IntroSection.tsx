import { BoxProps } from "@mui/material";
import * as styled from "./intro-section.styled";

const IntroSection: React.FC<BoxProps> = (props) => {
  return <styled.Section component="section" {...props}></styled.Section>;
};

export default IntroSection;
