import React from 'react'
import ResumeDoc from '../Files/Resume.pdf';
import '../Stylesheets/Resume.css'

class Resume extends React.Component{

    render() {
        return (
            <div>
                {/* PDF, with zoom set to 100% */}
                <embed id="resume" src={ResumeDoc + "#zoom=100"} type="application/pdf"/>
            </div>
        )
    }
}

export default Resume;