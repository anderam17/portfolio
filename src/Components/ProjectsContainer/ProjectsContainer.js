import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import picture from "../../images/moxie.png";
import projects from "../../projects.json";

function ProjectsContainer() {
  return (
    <>
      <SectionHeading title="Projects" />
      {projects.map((project) => (
        <ProjectCard
          picture={require('../../images' + project.picture)}
          title={project.title}
          description={project.description}
          deployedSite={project.deployedSite}
          github={project.github}
        />
      ))}
    </>
  );
}

export default ProjectsContainer;
