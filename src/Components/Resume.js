import React from 'react'
import ResumeDoc from '../Files/Resume.pdf';
import '../Stylesheets/Resume.css'

class Resume extends React.Component{

    render() {
        return (
            <div>
                <embed id="resume" src={ResumeDoc} type="application/pdf"/>
            </div>
        )
    }
}

export default Resume;