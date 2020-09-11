import React from "react";
import "./ProjectCard.css";

function ProjectCard({ picture, title, description, deployedSite, github }) {
  return (
    <>
      <div class="col-md-4" id="card-column">
        <div class="card h-100" id="project-card">
          <img
            src={picture}
            class="card-img-top"
            alt="Screenshot of Pantheos website."
          />
          <div class="card-body">
            <h3 class="card-title">{title}</h3>
            <p class="card-text">{description}</p>
            <a class="nav-link" href={deployedSite} target="_blank" >
              <h5>Check out Deployed Site HERE</h5>
            </a>
            <a class="nav-link" href={github} target="_blank">
              <h5>Check out GitHub Repository HERE</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
