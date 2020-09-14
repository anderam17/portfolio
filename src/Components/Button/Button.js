import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//no outline + make icons bigger
//label resume?
function Button({title, href, id, faIcon}) {
  return (
    <><a href={href} target="_blank">
    <FontAwesomeIcon transform="grow-30" icon={faIcon} style={{color:"#090541"}}/>
    </a>
    </>
  );
}

export default Button;