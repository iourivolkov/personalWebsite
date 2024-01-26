import {
  CardContainer,
  CardImageContainer,
  CardHeading,
  CardText,
  CardTextContainer,
  CardButton,
} from "./styled";
import ProjectCardModal from "../ProjectCardModal";
import { useState } from "react";

import Image from "next/image";

const projectsCopy = [
  {
    id: 1,
    img: "/assets/testImage.jpeg",
    imgAlt: "test image",
    projectTitle: "GooseEyes",
    projectDesc:
      "Infographic website for the GooseEyes app that simplifies the process of selling used cars online.",
  },
  {
    id: 2,
    img: "/assets/testImage.jpeg",
    imgAlt: "test image",
    projectTitle: "Cashmere",
    projectDesc:
      "Virtual runway showcasing Kruger's 2023 Dedicate for the Cure collection.",
  },
];

const ProjectCard = () => {
  return (
    <CardContainer>
      <CardImageContainer>
        <Image
          // style={{ borderRadius: "20px 20px 0 0" }}
          style={{ borderRadius: "20px" }}
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
        <CardButton>website</CardButton>
      </CardTextContainer>
    </CardContainer>
  );
};

export default ProjectCard;
