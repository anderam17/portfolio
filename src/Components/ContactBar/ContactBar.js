import React from "react";
import Button from "../Button/Button";
import { faEnvelopeSquare, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import resume from "../../images/resume.pdf";
import "./ContactBar.css";

function ContactBar() {
  return (
    <>
      <div className="row" id="contact-bar-row">
        <div className="col-md-4 icon-col">
        <Button id="linkedin" href="https://www.linkedin.com/in/allana-anderson-8b96aa126/" title="LinkedIn" faIcon={faLinkedin} />
        </div>
        <div className="col-md-4 icon-col">
              <Button id="github" href="https://github.com/anderam17" title="Github" faIcon={faGithubSquare} />
          </div>
        <div className="col-md-4 icon-col">
              <Button id="resume" href={resume} title="Resume" faIcon={faFilePdf} />
        </div>
             
              {/* <Button id="email" href="allana.anderson17@gmail.com" title="Email" faIcon={faEnvelopeSquare} /> */}
      </div>
    </>
  );
}

export default ContactBar;
