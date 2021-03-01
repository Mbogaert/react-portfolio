import React from "react";
import resume from "../../assets/developer/resume.pdf";

function Resume() {
  return (
    <section >
      <h1>
      Developer Proficiencies & Resume
      </h1>
      <div className="works-grid-container" >
      <div className="works-grid-item box8">
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
      </div>
      <div className="works-grid-item box9">
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
      </div>
      <div className="works-grid-item box10">
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
      <h2 className="works-grid-item box7" >
      <a className="resume" class="text" href={resume} download="Resume">
          Download Resume
        </a>
      </h2>
      </div>
      </div>
    </section>
  );
}

export default Resume;
