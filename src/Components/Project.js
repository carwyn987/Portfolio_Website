import React from 'react';
import '../Stylesheets/Project.css';
import '../Stylesheets/App.css';
import backgroundPic from '../Images/Nelson2.jpg';
import BodyElement from './BodyElement.js';

class Project extends React.Component{
    constructor(props){
        super(props);
        this.dir = props.dir;
    }

    render() {
        const data = require('../Files/' + this.dir + '/' + this.dir + '.json');
        console.log(data);

        // editItems = 
        //     <List id="edit-items" sx={{ width: '100%', bgcolor: 'background.paper' }}>
        //         {
        //             store.currentList.items.map((item, index) => (
        //                 <Top5Item 
        //                     key={'top5-item-' + (index+1)}
        //                     text={item}
        //                     index={index} 
        //                 />
        //             ))
        //         }
        //     </List>;

        let MappedItems = 
            <div className="projectBody content">
                {
                    data.text.map((value, index) => (
                        <BodyElement data={value} dir={this.dir} key={index}/>
                    ))
                }
            
            </div>;

        return (
            <div>
                <div className="partHeaderBackground">
                    <img className="backgroundpicProjHeader" src={backgroundPic} alt="papi"></img>
                    <h1 className="Project_Details">Project Details</h1>
                </div>
                <div className="projectHeader content">
                    <img className="thumbnailPic" src={process.env.PUBLIC_URL + "/ProjectImages/" + this.dir + "/thumbnail.jpg"} alt="papi"></img>
                    <div className="projDescBox">
                        <h4 className="titleProjDetails">{data.title}</h4>
                        <p className="descriptionProjDetails">{data.desc}</p>
                        <p className="descriptionProjDetails">{data.org}</p>
                        <a href={"https://www." + data.website}><p className="descriptionProjDetails link">{data.website}</p></a>
                        <p className="descriptionProjDetails">{data.completed}</p>
                    </div>
                </div>
                {MappedItems}
            </div>
            
            
        )
    }
}

export default Project;