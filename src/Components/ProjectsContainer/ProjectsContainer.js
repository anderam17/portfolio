import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import picture from "../../images/moxie.png";

function ProjectsContainer() {
  return (
    <>
    <SectionHeading title="Projects"/>
      <ProjectCard picture={picture} title="Moxie" description="This is a website designed for teachers to help them better manage their classroom and students." deployedSite="https://fathomless-hamlet-31566.herokuapp.com/" github="https://github.com/anderam17/moxie"/>
    </>
  );
}

export default ProjectsContainer;