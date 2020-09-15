import React from "react"
import SectionHeading from "../SectionHeading/SectionHeading";
import headshot from "../../images/headshot.png";
import "./AboutMe.css";
import ContactBar from "../ContactBar/ContactBar";

function AboutMe() {
    return(
        <>
        <SectionHeading 
        title="About Me"
        id="about-me"
        />
        <div id="about-me-container">
            <div className="row">
                <div className="col-md-3">
                    <img src={headshot} alt="Allana headshot"/>
                </div>
                <div className="col-md-9">
                    <p>I am a full stack website developer leveraging the many skills gained as a teacher and technical skills in full stack website development gained from the University of Denver's coding bootcamp. Along with a comprehensive knowledge of JavaScript, CSS, HTML, React.js, and responsive web design, I am known by superiors and coworkers as an extremely resilient, fast-learning, easy and enjoyable to work with team member looking to develop apps and websites that minimize and streamline the workload of everyday humans.
                    <br /><br />
                    After graduating from Vanderbilt University, I joined Teach for America for a 2 year commitment working as a teacher in a high needs school. Despite knowing nothing about teaching going in, I put in the effort necessary to lead 5 out of my 6 classes to notable increases in mastering state mathematics standards and after one year, was promoted to be the sole director of the math department. 
                    <br /><br />
                    After completing my 2 year commitment, I decided to join a coding bootcamp run by Trilogy through the University of Denver where I gained experience in Full Stack Web Development. I am excited to continue to develope projects and join a team where I can share my fierce desire to learn and produce excellent tech! 
                    <br /><br />
                    If you would like to see projects I have been a part of thus far, check out my LinkedIn, Github, and resume by clicking on the respective icons below.
                    </p>
                </div>
            </div>
            <ContactBar />
        </div>
        </>
    );
};

export default AboutMe;