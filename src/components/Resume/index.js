import React from "react";
import resume from "../../assets/developer/resume.pdf";

function Resume() {
  return (
    <section>
      <h1>
        <a class="text" href={resume} download="Resume">
          Download Resume
        </a>
      </h1>
      <h2>Developer Proficiencies</h2>
      <h3>Front-end:</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>jQuery</li>
        <li>Handlebars</li>
        <li>Bulma</li>
      </ul>
      <h3>Back-end:</h3>
      <ul>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Moment.js</li>
        <li>Inquirer.js</li>
        <li>Sequelize</li>
        <li>Dotenv</li>
        <li>Express-session</li>
        <li>Regex</li>
        <li>IndexedDB</li>
      </ul>
      <h3>More:</h3>
      <ul>
        <li>GitHub / GitHub Pages</li>
        <li>Insomnia</li>
        <li>JSON</li>
        <li>Webpack</li>
        <li>GitLab</li>
        <li>VS Code</li>
        <li>Heroku</li>
        <li>Webpack</li>
        <li>Jest</li>
        <li>Wix.com</li>
      </ul>
    </section>
  );
}

export default Resume;
