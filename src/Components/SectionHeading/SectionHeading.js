import React from "react";

function SectionHeading({title, paragraph}) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{title}</h1>
          <p className="lead">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
}

export default SectionHeading;
