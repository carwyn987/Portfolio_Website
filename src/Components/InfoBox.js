import React from 'react';
import '../Stylesheets/Infobox.css';

class InfoBox extends React.Component{
    render() {
        return (
            <div className="infobox">
                <p className="infobox-title">{this.props.title}</p>
                <p className="infobox-desc">{this.props.description}</p>
            </div>
        )
    }
}

export default InfoBox;