import React from 'react';
import '../Stylesheets/Header.css'
import fbIcon from '../Images/Icons/fb.png';
import linkedInIcon from '../Images/Icons/linkedin.png';
import gitIcon from '../Images/Icons/git.png';


class HeaderBar extends React.Component{
    render() {
        return (
            <div id="header">
                <div id="socials" className="content">
                    <p id="phoneNumberHeader" className="socialsText">+1 585 298 9794</p>
                    <a id="emailHeader" className="socialsText" href="mailto:carwyncollinsworth@gmail.com">carwyncollinsworth@gmail.com</a>
                    <ul id="socialIconList" className="socialsIcon">
                        <li className="socialsIconListItem"><a href="https://www.facebook.com/carwyn.collinsworth.71/"><img className="icon" alt="facebook" src={fbIcon}></img></a></li>
                        <li className="socialsIconListItem"><a href="https://github.com/carwyn987"><img id="giticon" alt="github" src={gitIcon}></img></a></li>
                        <li className="socialsIconListItem"><a href="https://www.linkedin.com/in/carwyn-c-439b29109/"><img className="icon" alt="linkedin" src={linkedInIcon}></img></a></li>
                    </ul>
                </div>
                <div id="navBar" className="content">
                    <p id="nameHeader">Carwyn Collinsworth</p>
                    <ul id="navList" className="socialsIcon">
                        <li className="navListItem"><a className="navListItem" href="/">Home</a></li>
                        <li className="navListItem"><a className="navListItem" href="/Resume">Resume</a></li>
                        <li className="navListItem"><a className="navListItem" href="/Projects">Projects</a></li>
                        <li className="navListItem"><a className="navListItem" href="/Notes">University Assignments and Notes</a></li>
                        <li className="navListItem"><a className="navListItem" href="/Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HeaderBar;