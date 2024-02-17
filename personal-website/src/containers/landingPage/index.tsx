import { FunctionComponent } from "react";
import NavBar from "@/components/NavBar";
import HeroText from "@/components/HeroText";
import HeroFooter from "@/components/HeroFooter";
import { PageContainer, VideoBackground } from "./styled";
import { useState, useEffect } from "react";

const LandingPage: FunctionComponent = () => {
  // add opaque overlay to landing page for first 2s. ease out blur animation.
  // setTimeout - at 2s mark setIsBlurOverlay = false
  // tie to blur effect in css

  const [isBlurOverlay, setIsBlurOverlay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsBlurOverlay(false);
    }, 2000);
  }, []);

  return (
    <PageContainer isBlur={isBlurOverlay}>
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
