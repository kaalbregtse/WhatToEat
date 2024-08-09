import React from "react";
import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add( faSquareGithub, faLinkedin );

export default function Footer () {
    return (
        <div className="wte-footer">
            <p>Site made by Kyczar Aalbregtse</p>
            <div>
                <a href="https://github.com/kaalbregtse" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-square-github" /></a>
                <a href="https://www.linkedin.com/in/kyczar-aalbregtse-52b545199/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
            </div>
        </div>
    )
}