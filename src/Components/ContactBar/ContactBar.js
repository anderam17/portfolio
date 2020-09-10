import React from "react";
import Button from "../Button/Button";
import { faEnvelopeSquare, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import resume from "../../images/resume.pdf"

function ContactBar() {
  return (
    <>
      <div className="row" id="contact-bar-row">
          <div className="contact-bar">
              <Button id="linkedin" href="https://www.linkedin.com/in/allana-anderson-8b96aa126/" title="LinkedIn" faIcon={faLinkedin} />
              <Button id="github" href="https://github.com/anderam17" title="Github" faIcon={faGithubSquare} />
              {/* //! going to have to do something different for email */}
              <Button id="email" href="allana.anderson17@gmail.com" title="Email" faIcon={faEnvelopeSquare} />
              <Button id="resume" href={resume} title="Resume" faIcon={faFilePdf} />
          </div>
      </div>
    </>
  );
}

export default ContactBar;
