import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App_body">

        <Home />
        <div className="row">
          <div className="col-md-12">

            <About />
          </div>
        </div>
      </div>


    </div >
  );
}

export default App;
