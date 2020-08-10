import React from 'react';
import NavBar from './Component/NavBar'
import './App.css';
// import Jumbotron from './Component/Jumbotron';
import Info from './Component/Info';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Jumbotron /> */}
      <div className = "info-container">
        <Info header="Test" info="Test" button="Test" />
        <Info header="Test" info="Test" button="Test" />
      </div>
    </div>
  );
}

export default App;
