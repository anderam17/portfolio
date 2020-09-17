import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//no outline + make icons bigger
//label resume?
function Button({href, faIcon}) {
  return (
    <><a href={href} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon transform="grow-30" icon={faIcon} style={{color:"#090541"}}/>
    </a>
    </>
  );
}

export default Button;