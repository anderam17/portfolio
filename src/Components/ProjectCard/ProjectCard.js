import React from "react";
import picture from "../../images/detentions.png";

function ProjectCard() {
  return (
    <>
      <div className="w3-half">
        <div className="polaroid">
          <img className="card-img" src={picture} alt="img" />
          <div className="container">
            <p>Stuff and Things</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
