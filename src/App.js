import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import {useState} from 'react'
import './App.css';

function App() {
  const [jugador, setJugador] = useState("jugador");
  return (
    <div className="App">
      <Navbar />
      <div className="App_body">

        <Home />
        <div className="row">
          <div className="col-md-12">

            <About jugador={jugador} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
