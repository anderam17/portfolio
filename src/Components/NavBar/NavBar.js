import React from "react";
import "./NavBar.css";
import {Navbar, Nav} from "react-bootstrap";

//move nav bar words to right side
//make solid + thinner
function NavBar() {


  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="custom-nav" sticky="top" variant="dark">
        <Navbar.Brand id="navbar-h1">Allana Anderson</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link bg="custom-link" href="#about-me">About</Nav.Link>
            <Nav.Link bg="custom-link" href="#project-container">Projects</Nav.Link>
            <Nav.Link bg="custom-link" href="#contact-me">Contact</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;


