import { BoxProps } from "@mui/material";
import * as styled from "./.styles";

const FeaturesSection: React.FC<BoxProps> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Section component="section" {...rest}>
      <h1>Features Section</h1>
    </styled.Section>
  );
};

export default FeaturesSection;
