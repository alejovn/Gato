import Navbar from './components/Navbar'
import Fondo_svg from './components/Fondo_svg'
import './css/fondo_svg.css'
import './App.css';
import './index.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="App_body">
      <Fondo_svg />         
      </div>
    </div >
  );
}

export default App;
