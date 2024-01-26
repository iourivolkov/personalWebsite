import type { NextPage } from "next";
import LandingPage from "@/containers/landingPage";
import ProjectPage from "@/containers/projectPage";
import AboutPage from "@/containers/aboutPage";
import ContactPage from "@/containers/contactPage";
import Footer from "@/components/Footer";
import { styled } from "styled-components";

export const StyledBreak = styled.hr`
  max-width: 95%;
  background-color: #f5f5f5;
  opacity: 0.3;
  margin: auto;
  z-index: 10;
`;

const Home: NextPage = () => {
  return (
    <>
      <LandingPage />
      <StyledBreak />
      <ProjectPage />
      <StyledBreak />
      <AboutPage />
      <StyledBreak />
      <ContactPage />
      <StyledBreak />
      <Footer />
    </>
  );
};

export default Home;
