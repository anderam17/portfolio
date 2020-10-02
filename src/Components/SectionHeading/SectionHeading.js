import React from "react";
import "./SectionHeading.css";

function SectionHeading({title, id}) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid section-heading" id={id}>
        <div className="container">
          <h1 className="display-4">{title}</h1>
        </div>
      </div>
    </>
  );
}

export default SectionHeading;
