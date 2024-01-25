import { FunctionComponent } from "react";
import {
  AboutPageContainer,
  AboutHeading,
  AboutImageContainer,
  AboutText,
  AboutTextContainer,
} from "./styled";

const AboutPage: FunctionComponent = () => {
  return (
    <AboutPageContainer>
      <AboutTextContainer>
        <AboutHeading id="about">Toronto based.</AboutHeading>
        <AboutText>
          Having worked in regulatory affairs, web 3.0 marketing, and software
          development, I am adept at satisfying technical requirements while
          navigating interpersonal relationships through client-facing roles.
        </AboutText>
      </AboutTextContainer>
      <AboutImageContainer>
        <img
          src="/assets/toronto.png"
          height="100%"
          width="100%"
          style={{
            objectPosition: "top",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </AboutImageContainer>
    </AboutPageContainer>
  );
};

export default AboutPage;
