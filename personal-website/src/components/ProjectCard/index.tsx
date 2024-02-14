import {
  CardContainer,
  CardHeading,
  CardText,
  CardTextContainer,
  CardButton,
  CardSubHeading,
  TechStack,
  ProjectCardButton,
  WorkedOn,
} from "./styled";
import ProjectCardModal from "../ProjectCardModal";
import { useState } from "react";

import Image from "next/image";

const projectsCopy = [
  {
    id: 1,
    img: "/assets/gooseEyes.png",
    imgAlt: "test image",
    projectTitle: "Goose Eyes",
    projectDesc: "Infographic website for the GooseEyes app.",
    techStack: "Built with: Next.js, Typescript, Styled Components",
    workedOn: "Worked on: header, side menu, hero section, and news page.",
    website: "https://gooseeyes.com/",
  },
  {
    id: 2,
    img: "/assets/cashmere.png",
    imgAlt: "test image",
    projectTitle: "Cashmere",
    projectDesc:
      "Virtual runway showcasing Kruger's 2023 Dedicate for the Cure collection.",
    techStack:
      "Built with: Next.js, Typescript, A-frame, Styled components, Zustand",
    workedOn:
      "Worked on: header, side menu, legal page, privacy policy page, about page, and dress spotlight hover.",
    website: "https://2023.cashmerecollection.ca/en/scene",
  },
];

const ProjectCard = () => {
  return (
    <>
      {projectsCopy.map((project: any, index: number) => (
        <CardContainer key={index}>
          <img
            height={500}
            width={800}
            src={project.img}
            alt={""}
            style={{ objectFit: "cover" }}
          />
          <CardTextContainer>
            <CardSubHeading>{project.projectTitle}</CardSubHeading>
            <CardHeading>{project.projectDesc}</CardHeading>
            <TechStack>{project.techStack}</TechStack>
            <WorkedOn>{project.workedOn}</WorkedOn>
          </CardTextContainer>
          <a href={project.website} target="_blank">
            <ProjectCardButton>visit website</ProjectCardButton>
          </a>
        </CardContainer>
      ))}
    </>
  );
};

export default ProjectCard;
