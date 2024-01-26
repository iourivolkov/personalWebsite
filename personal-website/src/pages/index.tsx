import type { NextPage } from "next";
import LandingPage from "@/containers/landingPage";
import ProjectPage from "@/containers/projectPage";
import AboutPage from "@/containers/aboutPage";
import ContactPage from "@/containers/contactPage";
import Footer from "@/components/Footer";
import { styled } from "styled-components";
import { usePersonalWebsiteStore } from "@/store/personalWebsiteStore";

export const StyledBreak = styled.hr<{ isMenuOpen: boolean }>`
  max-width: 95%;
  background-color: #f5f5f5;
  opacity: 0.3;
  margin: auto;
  z-index: 10;
  display: ${(props) => props.isMenuOpen && "none"};
`;

const Home: NextPage = () => {
  const { isMenuOpen } = usePersonalWebsiteStore();

  return (
    <>
      <LandingPage />
      <StyledBreak isMenuOpen={isMenuOpen} />
      <ProjectPage />
      <StyledBreak isMenuOpen={isMenuOpen} />
      <AboutPage />
      <StyledBreak isMenuOpen={isMenuOpen} />
      <ContactPage />
      <StyledBreak isMenuOpen={isMenuOpen} />
      <Footer />
    </>
  );
};

export default Home;
