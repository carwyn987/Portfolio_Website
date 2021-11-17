import React from 'react';
import '../Stylesheets/App.css';
import { Link } from "react-router-dom"; 

import backgroundPic from '../Images/Nelson2.jpg';
import recentwork1 from '../Images/electricSkateboard.jpg';
import recentwork2 from '../Images/fusion.jpg';
import recentwork3 from '../Images/linearPendulum.jpg';
import recentwork4 from '../Images/drone.jpg';


class Projects extends React.Component{
    state = {proj1Text: "gone",
            proj2Text: "gone",
            proj3Text: "gone",
            proj4Text: "gone",
    };

    handleMouseOverProj1 = (k) => {
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
                <div className="partHeaderBackground">
                    <img className="backgroundpicProjHeader" src={backgroundPic} alt="papi"></img>
                    <h1 className="Project_Details">Projects</h1>
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
                            <Link to="/drone">
                                <div className="pic3 picDivsFormat" onMouseOver={this.handleMouseOverProj3} onMouseLeave={this.handleMouseLeaveProj3}><img id="pic3Img" className="recentwork-img" alt="img" src={recentwork4}></img>
                                    <p id="recentProjectText3" className={this.state.proj3Text}>Drone Collision Avoidance</p>
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
        );
    }
}

export default Projects