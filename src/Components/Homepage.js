import React from 'react';
import '../Stylesheets/Homepage.css';
import Button from '@mui/material/Button';
import InfoBox from './InfoBox'

// Image imports
import backgroundPic from '../Images/Nelson2.jpg';
import recentwork1 from '../Images/electricSkateboard.jpg';
import recentwork2 from '../Images/fusion.jpg';
import recentwork3 from '../Images/linearPendulum.jpg';

class Homepage extends React.Component{
    render() {
        return (
            <div>
                <div className="background-wrapper">
                    <img id="backgroundpic" src={backgroundPic} alt="papi"></img>
                    <h1 id="nameTitlePage">Carwyn Rhys Collinsworth</h1>
                    <p id="introText">Welcome to my portfolio website. I am a sophomore at Stony Brook University, persuing a BS in computer science and a masters or PhD in a specialized subdivision such as data science or artificial intelligence. This website contains a variety of information about me, and details multiple projects I have completed. Enjoy! </p>
                    <Button href="#starterPage" id="getStarted" variant="outlined">Get Started!</Button>
                </div>
                <div id="Skillset">
                    <a href="/" id="starterPage"> </a>

                    {/* MAIN SKILL SET SECTION */}
                    <h3 className="sectionHeader">Main Skill Set</h3>
                    <p className="sectionHeaderSubtext">Also known as fields which I excel and am adequately competent</p>
                    <div id="skillInfoboxes">
                        <InfoBox title="Computer Programming" description="A multitude of projects required learning and implementation of C++, Java, Matlab, Javascript, Python, and web development (HTML, CSS, and Javascript)."/>
                        <InfoBox title="Mathematics" description="Courses taken / taking currently: High School Math, Precalc Honors, Calculus BC, Calculus III, Discrete Mathematics, Linear Algebra, and Differential Equations."/>
                        <InfoBox title="Engineering/Hardware" description="Various builds, including a bluetooth controlled electric skateboard, and an inverted linear pendulum have refined my hands on engineering and design skill set."/>
                    </div>

                    {/* RECENT WORKS SECTION */}
                    <h3 className="sectionHeader">Check out my recent works</h3>
                    <p className="sectionHeaderSubtext">Click on any of the images to view a more detailed project description</p>
                    <div className="recentWorks">
                        <div className="upperHalf">
                            <div className="pic1 picDivsFormat"><img className="recentwork-img" alt="img" src={recentwork1}></img></div>
                            <div className="pic2 picDivsFormat"><img className="recentwork-img" alt="img" src={recentwork2}></img></div>
                        </div>
                        <div className="bottomHalf">
                            <div className="pic3 picDivsFormat"><img className="recentwork-img" alt="img" src={recentwork2}></img></div>
                            <div className="pic4 picDivsFormat"><img className="recentwork-img" alt="img" src={recentwork3}></img></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;