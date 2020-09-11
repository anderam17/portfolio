import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import AboutMe from "./Components/AboutMe/AboutMe";
import ProjectsContainer from "./Components/ProjectsContainer/ProjectsContainer";
import ContactMe from "./Components/ContactMe/ContactMe"
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <AboutMe />
    <ProjectsContainer />
    <ContactMe />
    </>

  );
}

export default App;
