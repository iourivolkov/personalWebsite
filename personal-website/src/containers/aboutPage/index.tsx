import { FunctionComponent } from "react";
import {
  AboutPageContainer,
  AboutHeading,
  AboutImageContainer,
  AboutText,
  AboutTextContainer,
} from "./styled";

// onHover over words "creative" -> "buildoor", "capturing timeless images" -> "instagram handle"

const AboutPage: FunctionComponent = () => {
  return (
    <AboutPageContainer id="aboutPageContainer">
      <AboutTextContainer>
        <AboutText>
          Toronto-based creative who enjoys crafting immersive web experiences,
          building the future of finance via web3 and capturing timeless images.
        </AboutText>
      </AboutTextContainer>
      {/* <AboutImageContainer>
        <img
          src="/assets/toronto.png"
          height="100%"
          width="100%"
          style={{
            // objectPosition: "top",
            objectFit: "cover",
            // borderRadius: "20px",
          }}
        />
      </AboutImageContainer> */}
    </AboutPageContainer>
  );
};

export default AboutPage;
