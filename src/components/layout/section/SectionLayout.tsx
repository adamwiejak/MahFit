import * as styled from "./section-layout.styled";
import { BoxProps } from "@mui/material";

export interface ISection extends BoxProps {}

const SectionLayout: React.FC<ISection> = (props) => {
  const { children, ...rest } = props;

  return (
    <styled.Section {...rest} component="section">
      <styled.Content>
        <styled.IdHeader>#{props.id}</styled.IdHeader>

        {children}
      </styled.Content>
    </styled.Section>
  );
};

export default SectionLayout;
