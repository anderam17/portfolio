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
                    <p>I am a full stack website developer leveraging the many skills gained as a teacher and technical skills learned as a recent recipient of a certificate in full stack website development from the University of Denver. Along with a comprehensive knowledge of JavaScript, CSS, HTML, React.js, and responsive web design, I am known by friends and coworkers as an extremely resilient, fast-learning, easy and enjoyable to work with team member looking to develop apps and websites that minimize and streamline the workload of everyday humans.</p>
                </div>
            </div>
            <ContactBar />
        </div>
        </>
    );
};

export default AboutMe;