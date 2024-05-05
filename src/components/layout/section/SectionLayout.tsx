import * as styled from "./section-layout.styled";
import { BoxProps, Typography } from "@mui/material";

export interface ISection extends BoxProps {}

const SectionLayout: React.FC<ISection> = (props) => {
  const { children, ...rest } = props;

  return (
    <styled.Section {...rest} component="section">
      <styled.Content>
        {children || <Typography variant="h2"># {props.id}</Typography>}
      </styled.Content>
    </styled.Section>
  );
};

export default SectionLayout;
