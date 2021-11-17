import React from 'react';
import backgroundPic from '../Images/Nelson2.jpg';
import '../Stylesheets/InformationSlide.css';
import '../Stylesheets/App.css'

class InformationSlide extends React.Component{

    render() {
        return (
            <div>
                <div className="partHeaderBackground">
                        <img className="backgroundpicProjHeader" src={backgroundPic} alt="papi"></img>
                        <h1 className="Project_Details">University Assignments / Publications</h1>
                    </div>
                <div id="centerBody" className="content">
                    <div id="recentUpdateBox">
                        <h3 className="bolded exciting">Recent Update!</h3>
                        <h5 className="bolded">University of Rochester Laboratory for Laser Energetics Publication!</h5>
                        <a href="https://www.lle.rochester.edu/index.php/publications-2/high-school-reports/#toggle-id-2"><button className="buttonStyle" type="button">ACCESS PUBLICATION!</button></a>
                    </div>
                    <h5 className="bolded">CSE300 - Technical Communications Projects</h5>
                    <p className="infoText">News Release Project - Prompt: "Compose a press release for a product system, service, or an event taking place on campus or locally (current/near-future/within the past year)."</p>
                    <a href="newsRelease.pdf" target = "_blank"><button className="buttonStyle" type="button">ACCESS NEWS RELEASE!</button></a>
                    <p className="infoText">User Instructions Project - Prompt: "Write user instructions for performing ataskor simple procedure and present the instructions with an introduction and illustrations. As a result of using your user instructions, a reader should be able to comlete the task successfully and without frustration."</p>
                    <a href="userInstructions.pdf" target = "_blank"><button className="buttonStyle" type="button">ACCESS USER INSTRUCTIONS!</button></a>
                    <p className="infoText">Final Learning Reflection on Technical Communication - Prompt: "Write a 2-3 page essay on what you have learned from this course. You will assess your own learning and reflect on what your final takeaways are now that you have completed the assignments and course." </p>
                    <a href="finalReflection.pdf" target = "_blank"><button className="buttonStyle" type="button">ACCESS FINAL LEARNING REFLECTION - TECHNICAL COMMUNICATION!</button></a>
                    <h5 className="bolded">Mathematics Classes</h5>
                    <p className="infoText">Notes on MTH-225 Differential Equations</p>
                    <a href="diffEqs.pdf" target = "_blank"><button className="buttonStyle" type="button">ACCESS DIF-EQ NOTES!</button></a>
                </div>
            </div>
        )
    }
}

export default InformationSlide;