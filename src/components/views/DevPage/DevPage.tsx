import * as styled from "./styles";
import Section1 from "./Section1";
import { CardProps } from "@mui/material";
import Section2 from "./_section-2/Section2";

const DevbPage: React.FC<CardProps> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Page {...rest}>
      <Section1 />
      <Section2 />
    </styled.Page>
  );
};

export default DevbPage;
