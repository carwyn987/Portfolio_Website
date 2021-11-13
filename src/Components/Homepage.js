import React from 'react';
import backgroundPic from '../Images/Nelson2.jpg';
import '../Stylesheets/Homepage.css';

class Homepage extends React.Component{
    render() {
        return (
            <div>
                <div className="background-wrapper">
                    <img id="backgroundpic" src={backgroundPic} alt="papi"></img>
                </div>
                <div id="firstScreen">
                    <p>hi</p>
                </div>
            </div>
        )
    }
}

export default Homepage;