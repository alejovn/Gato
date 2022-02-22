import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Game from './components/Game'
import Users from './components/Users'
import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  return (
    <div className="App">

      <Navbar />
      <div className="App_body">
        <div className="row">
          <div className="col-md-6">
            <Home />
          </div>
          <div className="col-md-6">
          <Router>
              <Routes basename={process.env.PUBLIC_URL}>
                <Route path="/game" element={
                  <Game name1={name1} name2={name2} />
                }
                />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users name1={name1} name2={name2} setName1={setName1} setName2={setName2}/>} />
              </Routes>
            </Router>
          </div>
        </div>
        {/*<div className="row">
          <div className="col-md-12">
          <div className="cont-gato">
            <div id="gato"></div>
          </div>
          </div>
  </div>*/}
      </div>

    </div>
  );
}

export default App;
