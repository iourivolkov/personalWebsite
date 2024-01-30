import { FunctionComponent } from "react";
import NavBar from "@/components/NavBar";
import HeroText from "@/components/HeroText";
import HeroFooter from "@/components/HeroFooter";
import { PageContainer, VideoBackground } from "./styled";

const LandingPage: FunctionComponent = () => {
  return (
    <PageContainer>
      {/* <VideoBackground
        src={"/assets/abstract2.mp4"}
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <NavBar />
      <HeroText />
      <HeroFooter />
    </PageContainer>
  );
};

export default LandingPage;
