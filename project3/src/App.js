import './css/App.css';
import React from 'react';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';

document.title = 'CHISME'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
