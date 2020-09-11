import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";

function ContactBar({title, href, id, faIcon}) {
  return (
    <><a href={href}>
      <button id={id} type="button" className="btn btn-outline-info">  <FontAwesomeIcon transform="grow-20" icon={faIcon}/></button>
    </a>
    </>
  );
}

export default ContactBar;