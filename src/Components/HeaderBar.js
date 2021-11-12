import React from 'react';
import '../Stylesheets/Header.css'

class HeaderBar extends React.Component{
    render() {
        return (
            <div id="header">
                <div id="socials" className="content">
                    <p id="phoneNumberHeader" className="socialsText">+1 585 298 9794</p>
                    <a id="emailHeader" className="socialsText" href="mailto:carwyncollinsworth@gmail.com">carwyncollinsworth@gmail.com</a>
                    <ul id="socialIconList" className="socialsIcon">
                        <li className="socialsIconListItem">f</li>
                        <li className="socialsIconListItem">z</li>
                    </ul>
                </div>
                <div id="navBar" className="content">
                    <p id="nameHeader">Carwyn Collinsworth</p>
                    <ul id="navList" className="socialsIcon">
                        <li className="navListItem">Home</li>
                        <li className="navListItem">Resume</li>
                        <li className="navListItem">Projects</li>
                        <li className="navListItem">University Assignments and Notes</li>
                        <li className="navListItem">Contact</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HeaderBar;