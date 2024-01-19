import {
  CardContainer,
  CardImageContainer,
  CardHeading,
  CardText,
  CardTextContainer,
} from "./styled";

import Image from "next/image";

const ProjectCard = () => {
  return (
    <CardContainer>
      <CardImageContainer>
        <Image
          style={{ borderRadius: "20px 20px 0 0" }}
          height={650}
          width={550}
          src="/assets/testImage.jpeg"
          alt="test img"
        />
      </CardImageContainer>
      <CardTextContainer>
        <CardHeading>GooseEyes</CardHeading>
        <CardText>
          Infographic website for the GooseEyes app that simplifies the process
          of selling used cars online.{" "}
        </CardText>
      </CardTextContainer>
    </CardContainer>
  );
};

export default ProjectCard;
