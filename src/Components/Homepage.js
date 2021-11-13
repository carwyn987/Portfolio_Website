import React from 'react';
import backgroundPic from '../Images/Nelson2.jpg';
import '../Stylesheets/Homepage.css';
import Button from '@mui/material/Button';

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
                <div id="firstScreen">
                    <a id="starterPage"></a>
                    <p>hi</p>
                </div>
            </div>
        )
    }
}

export default Homepage;