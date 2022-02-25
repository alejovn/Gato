import Navbar from './components/Navbar'
import PlayerPersonPc from './components/PlayerPersonPc'
import PlayerPersonPerson from './components/PlayerPersonPerson'
import './App.css';
import './index.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="App_body">
          <PlayerPersonPerson />
          <PlayerPersonPc />
      </div>
    </div >
  );
}

export default App;
