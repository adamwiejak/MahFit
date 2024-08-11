import * as styled from "./.styles";
import ContactSection from "./_contact-section/ContactSection";
import HeroSection from "./_hero-section/HeroSection";
import FeaturesSection from "./_features-setion/FeaturesSection";
import AboutSection from "./_about-section/AboutSection";
import { Container } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <styled.Page component="main">
      <HeroSection />

      <Container>
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </Container>
    </styled.Page>
  );
};

export default HomePage;
