import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";

//no outline + make icons bigger
//label resume?
function Button({title, href, id, faIcon}) {
  return (
    <><a href={href} target="_blank">
    <FontAwesomeIcon transform="grow-40" icon={faIcon} style={{color:"#090541"}}/>
    </a>
    </>
  );
}

export default Button;