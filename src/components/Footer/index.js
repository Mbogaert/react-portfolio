import React from 'react';
import etsy from '../../assets/icons/etsy-icon.png';
import gitHub from '../../assets/icons/github-icon.png';
import linkedIn from '../../assets/icons/linkedin-icon.png';

function Footer() {
    return (
        <footer>
            <a href="https://github.com/Mbogaert"><img src={gitHub} style={{ width: "10% "}} alt=""/></a>
            <a href="https://www.linkedin.com/in/mathewbogaert/"><img src={linkedIn} style={{ width: "10% "}} alt=""/></a>
            <a href="https://www.etsy.com/shop/pokements/"><img src={etsy} style={{ width: "10% "}} alt=""/></a>
        </footer>
    )
}

export default Footer;