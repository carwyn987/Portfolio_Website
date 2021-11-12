import './Stylesheets/App.css';
import HeaderBar from './Components/HeaderBar'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.title = "Carwyn Rhys";
  }, []);

  return (
    <div className="App App-header">
      <HeaderBar></HeaderBar>
    </div>
  );
}

export default App;