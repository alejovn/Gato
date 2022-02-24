import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import UserPc from './components/UserPc'
import { useState } from 'react'
import './App.css';
import './index.css';

function App() {
  const [jugador, setJugador] = useState("jugador");
  return (
    <div className="App">
      <Navbar />
      <div className="App_body">
        <Home />
        <div id="section2" className="row">
          <span className="l-br">-</span>
          <span className="l-br">-</span>
          <span className="l-br">-</span>
          <div className="col-md-4">
            <UserPc jugador={jugador} setJugador={setJugador} />
          </div>
          <div className="col-md-8">
            <About jugador={jugador} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
