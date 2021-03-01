import React from 'react';
import developerImage from '../../assets/developer/bogaert-mathew.jpg';

function About() {
    return (
        <div>
            <h1>About Me</h1>
            <span>
            <img src={developerImage} style={{ width: "20% "}} alt="portfolio developer Mathew Bogaert" />
            <div>Mathew Bogaert has experience in Coding, Film and Food Service. He also has two bachelor degrees (both from the University of Arizona): Gender & Women Studies (2013) and Film & Television (2018). He is currently finishing a Full-Stack Web Developer Coding Bootcamp through the University of Arizona as well. </div>
            </span>
        </div>
    )
}

export default About;