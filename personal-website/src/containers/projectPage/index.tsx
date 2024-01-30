import { FunctionComponent } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ProjectCardContainer, ProjectPageHeading } from "./styled";

const ProjectPage: FunctionComponent = () => {
  return (
    <>
      <ProjectPageHeading id="projects"> past work</ProjectPageHeading>
      <ProjectCardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectCardContainer>
    </>
  );
};

export default ProjectPage;
