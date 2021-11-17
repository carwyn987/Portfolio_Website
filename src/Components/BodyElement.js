import React from 'react';
import '../Stylesheets/BodyElement.css';
import parse from 'html-react-parser';

class Project extends React.Component{
    
    render() {

        switch(this.props.data.substr(0,3)){
            case "img":
                return (
                    <img className="bodyImage" src={process.env.PUBLIC_URL + "/ProjectImages/" + this.props.dir + "/" + this.props.data + ".jpg"} alt="informational_image"></img>
                )
            case "<if":
                return (
                    parse(this.props.data)
                )
            default:
                if(this.props.data.substr(0,1) === ":"){
                    return (
                        <h1 className="bodyText">{this.props.data.substr(1)}</h1>
                    )
                }else{
                    return (
                        <p className="bodyText">{this.props.data}</p>
                    )
                }
        }
    }
}

export default Project;