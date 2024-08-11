import * as styled from "./.styles";
import { CardProps } from "@mui/material/Card";
import { scheduleImageAsset } from "../../../../assets/images/schedule/asset";
import { Typography } from "@mui/material";

const HeroSection: React.FC<CardProps> = (props) => {
  return (
    <styled.Section {...props}>
      <styled.Background imageAsset={scheduleImageAsset} />

      <styled.ContentCard>
        <Typography variant="h2">Hero Section</Typography>
      </styled.ContentCard>
    </styled.Section>
  );
};

export default HeroSection;
