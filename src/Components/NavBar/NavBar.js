import React from "react";
import "./NavBar.css"

//move nav bar words to right side
//make solid + thinner
function NavBar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar bg" id="nav-bar-portfolio">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#about-me">
              About <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#project-container">
              Projects
            </a>
            <a className="nav-link" href="#contact-me">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
