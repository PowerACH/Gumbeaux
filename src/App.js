import React from 'react';
import NavBar from './Component/NavBar'
import './App.css';
import Jumbotron from './Component/Jumbotron';
import Info from './Component/Info';
import Footer from './Component/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <div className = "info-container">
        <Info header="All of our dishes are made from scratch using the freshest ingredients" info="Our menu consists of various dishes from south Louisiana, from Creole to Etouffee to Jambalaya and boiled crawfish. Most of our seafood is fresh from the waters of the Louisiana bayous, the Gulf of Mexico and the eastern US coast. We go to extreme measures to ensure that you are getting the freshest product available." button="View Our Menu" />
      <Footer />
      </div>
    </div>
  );
}

export default App;
