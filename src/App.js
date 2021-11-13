import './Stylesheets/App.css';
import Homepage from './Components/Homepage.js'
import HeaderBar from './Components/HeaderBar'

import { useEffect } from 'react'
import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;