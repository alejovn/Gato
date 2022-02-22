import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Game from './components/Game'
import Users from './components/Users'
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name1, setName1] = useState("jugador 1");
  const [name2, setName2] = useState("jugador 2");
  return (
    <div className="App">
      <Navbar />
      <div className="App_body">
        <div className="row">
          <div className="col-md-12">
            <Home />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Game name1={name1} name2={name2} />
            <Users name1={name1} name2={name2} setName1={setName1} setName2={setName2} />
            <About/> 
          </div>
        </div>
      </div>
      {/*<div className="row">
          <div className="col-md-12">
          <div className="cont-gato">
            <div id="gato"></div>
          </div>
          </div>
  </div>*/}

    </div >
  );
}

export default App;
