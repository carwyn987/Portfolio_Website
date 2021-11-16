import React from 'react';
import { Link } from "react-router-dom"; 
import '../Stylesheets/Homepage.css';
import Button from '@mui/material/Button';
import InfoBox from './InfoBox'

// Image imports
import backgroundPic from '../Images/Nelson2.jpg';
import recentwork1 from '../Images/electricSkateboard.jpg';
import recentwork2 from '../Images/fusion.jpg';
import recentwork3 from '../Images/linearPendulum.jpg';

class Homepage extends React.Component{
    state = {proj1Text: "gone",
            proj2Text: "gone",
            proj3Text: "gone",
            proj4Text: "gone",
    };

    handleMouseOverProj1 = (k) => {
        console.log(k);
        this.setState({
            proj1Text: "slow"
        });
    }

    handleMouseLeaveProj1 = () => {
        this.setState({
            proj1Text: "gone"
        })
    }

    handleMouseOverProj2 = () => {
        this.setState({
            proj2Text: "slow"
        });
    }

    handleMouseLeaveProj2 = () => {
        this.setState({
            proj2Text: "gone"
        })
    }
    handleMouseOverProj3 = () => {
        this.setState({
            proj3Text: "slow"
        });
    }

    handleMouseLeaveProj3 = () => {
        this.setState({
            proj3Text: "gone"
        })
    }
    handleMouseOverProj4 = () => {
        this.setState({
            proj4Text: "slow"
        });
    }

    handleMouseLeaveProj4 = () => {
        this.setState({
            proj4Text: "gone"
        })
    }

    render() {
        return (
            <div>
                {/* WELCOME PAGE / SPLASH SCREEN SECTION */}
                <div className="background-wrapper">
                    <img id="backgroundpic" src={backgroundPic} alt="papi"></img>
                    <h1 id="nameTitlePage">Carwyn Rhys Collinsworth</h1>
                    <p id="introText">Welcome! I am a Junior-year undergraduate student at Stony Brook University, persuing a BS in Computer Science and a Masters in a specialized subdivision such as data science or artificial intelligence. This website contains a variety of information about me, and details multiple projects I have completed. Enjoy! </p>
                    <Button href="#starterPage" id="getStarted" variant="outlined">Get Started!</Button>
                </div>
                <div id="Skillset">
                    <a href="/" id="starterPage"> </a>

                    {/* MAIN SKILL SET SECTION */}
                    <h3 className="sectionHeader">Main Skill Set</h3>
                    <p className="sectionHeaderSubtext">Also known as fields which I excel and am adequately competent</p>
                    <div id="skillInfoboxes">
                        <InfoBox title="Computer Programming" description="A multitude of projects prompted learning and implementation of C++, Java, Matlab, Python, and Web Development (HTML, CSS, Javascript, React Framework, NodeJS, Express, etc)."/>
                        <InfoBox title="Mathematics" description="Have excelled in mathematics courses including Calculus BC, Calculus III, Discrete Mathematics, Linear Algebra, Differential Equations, Statistics, Finite Mathematical Structures, etc."/>
                        <InfoBox title="Engineering/Hardware" description="Various projects such as a bluetooth controlled electric skateboard and an inverted linear pendulum have refined my hands on engineering and design skill set."/>
                    </div>

                    {/* RECENT WORKS SECTION */}
                    <h3 className="sectionHeader">Check out my recent works</h3>
                    <p className="sectionHeaderSubtext">Click on any of the images to view a more detailed project description</p>
                    <div className="recentWorks">
                        <div className="upperHalf">
                            <Link to="/electric_longboard">
                                <div className="pic1 picDivsFormat" onMouseOver={this.handleMouseOverProj1} onMouseLeave={this.handleMouseLeaveProj1}><img id="pic1Img" className="recentwork-img" alt="img" src={recentwork1}></img>
                                        <p id="recentProjectText1" className={this.state.proj1Text}>Electric Longboard</p>
                                </div>
                            </Link>
                            <Link to="/fusion_research">
                                <div className="pic2 picDivsFormat" onMouseOver={this.handleMouseOverProj2} onMouseLeave={this.handleMouseLeaveProj2}><img id="pic2Img" className="recentwork-img" alt="img" src={recentwork2}></img>
                                    <p id="recentProjectText2" className={this.state.proj2Text}>Fusion Research</p>
                                </div>
                            </Link>
                        </div>
                        <div className="bottomHalf">
                            <Link to="/something">
                                <div className="pic3 picDivsFormat" onMouseOver={this.handleMouseOverProj3} onMouseLeave={this.handleMouseLeaveProj3}><img id="pic3Img" className="recentwork-img" alt="img" src={recentwork2}></img>
                                    <p id="recentProjectText3" className={this.state.proj3Text}>Something Else</p>
                                </div>
                            </Link>
                            <Link to="/linear_pendulum">
                                <div className="pic4 picDivsFormat" onMouseOver={this.handleMouseOverProj4} onMouseLeave={this.handleMouseLeaveProj4}><img id="pic4Img" className="recentwork-img" alt="img" src={recentwork3}></img>
                                    <p id="recentProjectText4" className={this.state.proj4Text}>Linear Pendulum</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;