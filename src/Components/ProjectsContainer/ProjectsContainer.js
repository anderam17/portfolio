import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import projects from "../../projects.json";
import "./ProjectsContainer.css"

function ProjectsContainer() {
  return (
    <>
      <SectionHeading title="Projects" id="project-container"/>
      <div className="container" id="project-cards">
      {projects.map((project) => (
        <ProjectCard
          picture={require('../../images' + project.picture)}
          title={project.title}
          description={project.description}
          deployedSite={project.deployedSite}
          github={project.github}
        />
      ))}
      </div>
    </>
  );
}

export default ProjectsContainer;
