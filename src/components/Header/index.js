import React from 'react';

function Header(props) {
    const { currentPage, handlePageChange } = props;

    return (
        <header>
            <h1>Mathew Bogaert</h1>
            <nav>
                <ul>
                    <li className={currentPage === "About"}>
                        <span onClick={() => handlePageChange("About")}>About Me</span>
                    </li>
                    <li className={currentPage === "Portfolio"}>
                        <span onClick={() => handlePageChange("Portfolio")}>Portfolio</span>
                    </li>
                    <li className={currentPage === "Contact"}>
                        <span onClick={() => handlePageChange("Contact")}>Contact Me</span>
                    </li>
                    <li className={currentPage === "Resume"}>
                        <span onClick={() => handlePageChange("Resume")}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;