import './Stylesheets/App.css';
import Homepage from './Components/Homepage.js';
import HeaderBar from './Components/HeaderBar.js';
import Resume from './Components/Resume.js';
import Project from './Components/Project.js';
import Projects from './Components/Projects.js';
import InformationSlide from './Components/InformationSlide.js';


import { useEffect, React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  useEffect(() => {
    document.title = "Carwyn Rhys";
  }, []);

  return (
    <BrowserRouter>
      <div className="App App-header">
      <HeaderBar></HeaderBar>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/notes" element={<InformationSlide/>}/>
          <Route path="/linear_pendulum" element={<Project dir="linear_pendulum"/>}/>
          <Route path="/electric_longboard" element={<Project dir="electric_longboard"/>}/>
          <Route path="/fusion_research" element={<Project dir="fusion_research"/>}/>
          <Route path="/drone" element={<Project dir="drone"/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;