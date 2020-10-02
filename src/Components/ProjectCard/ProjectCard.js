import React from "react";
import "./ProjectCard.css";

function ProjectCard({ picture, title, description, deployedSite, github }) {
  return (
    <>
      <div className="col-md-4" id="card-column">
        <div className="card h-100" id="project-card">
          <img
            src={picture}
            className="card-img-top"
            alt="Screenshot of Pantheos website."
          />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
            <a className="nav-link" href={deployedSite} target="_blank" rel="noopener noreferrer">
              <h5>Check out Deployed Site HERE</h5>
            </a>
            <a className="nav-link" href={github} target="_blank" rel="noopener noreferrer">
              <h5>Check out GitHub Repository HERE</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
