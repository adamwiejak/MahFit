import * as styled from "./styles";
import AboutSection from "./_about-section/AboutSection";
import IntroSection from "./_intro-section/IntroSection";
import HeroSection from "./_hero-section/HeroSection";
import FeaturesSection from "./_features-setion/FeaturesSection";
import ContactSection from "./_contact-section/ContactSection";

const HomePage: React.FC = () => {
  return (
    <styled.Page component="main">
      <HeroSection id="home" />
      <IntroSection id="intro" />
      <FeaturesSection id="features" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </styled.Page>
  );
};

export default HomePage;
