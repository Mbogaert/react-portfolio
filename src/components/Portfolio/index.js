import React from 'react';

function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className="works-grid-container">
            <div className="works-grid-item box1" >
                <a href="https://immense-coast-52607.herokuapp.com/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/group-project-two">GitHub Repository</a>
            </div>
            <div className="works-grid-item box2">
                <a href="https://mbogaert.github.io/portfolio/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/portfolio">GitHub Repository</a>
            </div>
            <div className="works-grid-item box3" >
                <a href="https://mbogaert.github.io/mars-versus-earth-weather/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/mars-versus-earth-weather">GitHub Repository</a>
            </div>
            <div className="works-grid-item box4" >
                <a href="https://immense-badlands-80593.herokuapp.com/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/budget-app">GitHub Repository</a>
            </div>
            <div className="works-grid-item box5" >
                <a href="https://aqueous-escarpment-47432.herokuapp.com/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/tech-blog">GitHub Repository</a>
            </div>
            <div className="works-grid-item box6" >
                <a href="https://frozen-taiga-73380.herokuapp.com/">Deployed Application</a>
                <a href="https://github.com/Mbogaert/note-taker">GitHub Repository</a>
            </div>
            </div>
        </section>
    )
}

export default Portfolio;