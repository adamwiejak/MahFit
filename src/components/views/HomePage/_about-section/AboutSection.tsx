import { BoxProps } from "@mui/material";
import * as styled from "./.styles";

const AboutSection: React.FC<BoxProps> = (props) => {
  return (
    <styled.Section component="section" {...props}>
      <h1>About Section</h1>
    </styled.Section>
  );
};

export default AboutSection;
