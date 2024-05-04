import * as styled from "./hero-section.styled";
import * as config from "./config";
import { useRef } from "react";
import { CardProps } from "@mui/material/Card";
import useTween from "../../../../hooks/useTween";
import GoogleAuthProvider from "../../../shared/auth-providers/GoogleAuthProvider";
import FacebookAuthProvider from "../../../shared/auth-providers/FacebookAuthProvider";
import ImageSlider from "../../../blocks/image-slider/ImageSlider";

const HeroSection: React.FC<CardProps> = (props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // useTween(() => config.enterTween(sectionRef));
  useTween(() => config.onScrollTween(sectionRef));

  return (
    <styled.Section {...props} ref={sectionRef} component="section">
      <ImageSlider
        imagesAssets={config.images}
        switcher
        sx={{ py: 5, px: 6 }}
      />
      <styled.Overlay role="overlay" />

      <styled.Content>
        <styled.HeaderBox>
          <styled.Header variant="h2">Track Your Progress.</styled.Header>
          <styled.Header variant="h2">Achives Your Goals.</styled.Header>
        </styled.HeaderBox>

        <styled.ActionsBox>
          <GoogleAuthProvider />
          <styled.Header variant="h5">Or</styled.Header>
          <FacebookAuthProvider />
        </styled.ActionsBox>
      </styled.Content>
    </styled.Section>
  );
};

export default HeroSection;
