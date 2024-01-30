import {
  CardContainer,
  CardHeading,
  CardText,
  CardTextContainer,
  CardButton,
  CardSubHeading,
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
  {
    id: 3,
    img: "/assets/testImage.jpeg",
    imgAlt: "test image",
    projectTitle: "Lurry Labs",
    projectDesc:
      "Decentralized creative studio bridging web2 and web3 communities.",
  },
];

const ProjectCard = () => {
  return (
    <CardContainer>
      <Image
        height={300}
        width={400}
        src="/assets/testImage.jpeg"
        alt="test img"
        style={{}}
      />
      <CardTextContainer>
        <CardSubHeading>Zemind Studios</CardSubHeading>
        <CardHeading>GooseEyes</CardHeading>
      </CardTextContainer>
    </CardContainer>
  );
};

export default ProjectCard;
