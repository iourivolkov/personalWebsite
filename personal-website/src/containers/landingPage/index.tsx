import { FunctionComponent } from "react";
import NavBar from "@/components/NavBar";
import HeroText from "@/components/HeroText";
import HeroFooter from "@/components/HeroFooter";

const LandingPage: FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <HeroText />
      <HeroFooter />
    </>
  );
};

export default LandingPage;
