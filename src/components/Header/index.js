import React from 'react';

function Header(props) {
    const { currentPage, handlePageChange } = props;

    return (
        <header>
            <h1>Mathew Bogaert</h1>
            <nav>
                <ul>
                    <li class={currentPage === "About"}>
                        <span onClick={() => handlePageChange("About")}>About Me</span>
                    </li>
                    <li class={currentPage === "Portfolio"}>
                        <span onClick={() => handlePageChange("Portfolio")}>Portfolio</span>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;