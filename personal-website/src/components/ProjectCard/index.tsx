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
  CardModalButton,
  CardButtonContainer,
  CardHr,
} from "./styled";
import ProjectCardModal from "../ProjectCardModal";
import { projectsCopy } from "../Copy";
import { usePersonalWebsiteStore } from "@/store/personalWebsiteStore";

import { useState } from "react";

// darken body bg when projectCard modal is opened

const ProjectCard = () => {
  const { isModalOpen, setIsModalOpen } = usePersonalWebsiteStore();

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function toggleModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && (
        <ProjectCardModal isModal={isModalOpen} toggleModal={toggleModal} />
      )}
      {projectsCopy.map((project: any, index: number) => (
        <CardContainer key={index} id="projectCardContainer">
          <CardTextContainer>
            <CardSubHeading onClick={handleModalOpen}>
              {project.projectTitle}
            </CardSubHeading>
            <CardHeading>{project.projectDesc}</CardHeading>
          </CardTextContainer>
          <CardButtonContainer>
            {/* <CardModalButton onClick={handleModalOpen}>
              more info
            </CardModalButton> */}
            <a href={project.website} target="_blank">
              <ProjectCardButton>visit website</ProjectCardButton>
            </a>
          </CardButtonContainer>
          <CardHr />
        </CardContainer>
      ))}
    </>
  );
};

export default ProjectCard;
