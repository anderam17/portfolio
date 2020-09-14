import React from "react";
import "./NavBar.css"

//move nav bar words to right side
//make solid + thinner
function NavBar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar bg" id="nav-bar-portfolio">
      <div class="container-fluid">
      <h1 id="navbar-h1">Allana Anderson</h1>
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

        <div class="collapse navbar-collapse" id="navbarResponsive">

          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link pages" href="#about-me">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link pages" href="#project-container">Projects</a>
            </li>

            <li class="nav-item">
              <a class="nav-link pages" href="#contact-me">Contact</a>
            </li>
          </ul>
        </div> 

      </div>
      </nav>
    </>
  );
}

export default NavBar;
