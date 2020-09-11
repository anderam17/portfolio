import React from "react";

function SectionHeading({title, id}) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid" id={id}>
        <div className="container">
          <h1 className="display-4">{title}</h1>
        </div>
      </div>
    </>
  );
}

export default SectionHeading;
