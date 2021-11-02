import './App.css';
import Pad from './reactComponents/Pad';

function App() {

  var pads = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  pads = pads.map(item => (<Pad letter={item} />));

  return (
    <div className="drumMachine" id="drum-machine">
      <header className="App-header">
        <p>
          Drum Machine
        </p>
      </header>

      <div id="pads-wraper">
        {pads}
      </div>

      <div id="display"></div>
    </div>
  );
}

export default App;