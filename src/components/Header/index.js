import React from 'react';

function Header() {
    return (
        <header>
            <h1>Mathew Bogaert</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;