import React from 'react';
import pupsImage from '../../assets/projects/plenty-o-pups.png';
import portfolioImage from '../../assets/projects/html-portfolio.png';
import marsImage from '../../assets/projects/mars-vs-earth.png';
import budgetImage from '../../assets/projects/budget-tracker.png';
import blogImage from '../../assets/projects/tech-blog.png';
import noteImage from '../../assets/projects/note-taker.png';

function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <div>
                <div>Plenty 0' Pups</div>
                <img src={pupsImage} style={{ width: "50% "}} alt="plenty o pups application"/>
                <a href="https://immense-coast-52607.herokuapp.com/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/group-project-two">GitHub Repository</a>
            </div>
            <div>
                <div>HTML Portfolio</div>
                <img src={portfolioImage} style={{ width: "50%" }} alt="HTML based portfolio"/>
                <a href="https://mbogaert.github.io/portfolio/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/portfolio">GitHub Repository</a>
            </div>
            <div>
                <div>Mars vs. Earth Weather</div>
                <img src={marsImage} style={{ width: "50%" }} alt="Mars vs. Earth Weather API application"/>
                <a href="https://mbogaert.github.io/mars-versus-earth-weather/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/mars-versus-earth-weather">GitHub Repository</a>
            </div>
            <div>
                <div>Budget Tracker</div>
                <img src={budgetImage} style={{ width: "50%" }} alt="budget tracker that can be used offline"/>
                <a href="https://immense-badlands-80593.herokuapp.com/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/budget-app">GitHub Repository</a>
            </div>
            <div>
                <div>Tech Blog</div>
                <img src={blogImage} style={{ width: "50%" }} alt="tech blog forum"/>
                <a href="https://aqueous-escarpment-47432.herokuapp.com/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/tech-blog">GitHub Repository</a>
            </div>
            <div>
                <div>Note Taker Application</div>
                <img src={noteImage} style={{ width: "50%" }} alt="HTML based portfolio"/>
                <a href="https://frozen-taiga-73380.herokuapp.com/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/note-taker">GitHub Repository</a>
            </div>
        </section>
    )
}

export default Portfolio;