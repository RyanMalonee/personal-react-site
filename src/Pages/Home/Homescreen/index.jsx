import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfoio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

// This will be the home page and renders the components in the
// order that they're listed
export default function Homescreen() {
  return (
    // React Fragments
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfoio />
      <ContactMe />
      <Footer />
    </>
  );
}
