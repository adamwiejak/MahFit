import * as styled from "./.styles";
import { ContainerProps } from "@mui/material";

export interface ISectionLayout extends ContainerProps {}

const SectionLayout: React.FC<ISectionLayout> = (props) => {
  const { children, ...rest } = props;

  return <styled.Container {...rest}>{children || <h2>Section</h2>}</styled.Container>;
};

export default SectionLayout;
