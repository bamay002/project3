import './css/App.css';
import React from 'react';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './UserContext';

document.title = 'CHISME'

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <NavBar />
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
