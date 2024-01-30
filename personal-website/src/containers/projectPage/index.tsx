import { FunctionComponent } from "react";
import ProjectCard from "@/components/ProjectCard";
import {
  ProjectCardContainer,
  ProjectPageHeading,
  ProjectPageContainer,
} from "./styled";

const ProjectPage: FunctionComponent = () => {
  return (
    <ProjectPageContainer>
      <ProjectPageHeading id="projects"> past work</ProjectPageHeading>
      <ProjectCardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectCardContainer>
    </ProjectPageContainer>
  );
};

export default ProjectPage;
