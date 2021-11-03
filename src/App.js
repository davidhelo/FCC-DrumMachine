import React, { useState } from 'react';
import './App.css';
import Pad from './reactComponents/Pad';
import Display from './reactComponents/Display';
import bankData from './banksData';

function App() {
  let [appState, setAppState] = useState({
    power: true,
    currentBankData: bankData[0], // two values 0 or 1 for two banks of data
    display: "",
    volume: 50
  });

    // declare array of pads based on the currentbank of data that include the key to be shown and the audio URL to play when press.
  let renderPads = appState.currentBankData.map(item => (<Pad audioURL={item.audioURL} letter={item.padLetter} padId={item.padLetter} />));

  return (
    <div className="drumMachine" id="drum-machine">
      <header className="App-header">
        <p>
          Drum Machine
        </p>
      </header>

      <div id="pads-wraper">
        {renderPads}
      </div>

      <Display displayName="Hola" />
    </div>
  );
}

export default App;