import { FunctionComponent } from "react";
import Image from "next/image";
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
        <AboutHeading>Toronto based.</AboutHeading>
        <AboutText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          minima corrupti maxime distinctio soluta cupiditate error excepturi
          itaque, cum rem hic deleniti, a repellat vitae veniam repudiandae
          velit! Eum, a.
        </AboutText>
      </AboutTextContainer>
      <AboutImageContainer>
        <Image
          src="/assets/testImage.jpeg"
          alt="test img"
          height={650}
          width={550}
          style={{ borderRadius: "20px" }}
        />
      </AboutImageContainer>
    </AboutPageContainer>
  );
};

export default AboutPage;
