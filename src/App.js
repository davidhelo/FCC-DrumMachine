import React, { useState } from 'react';
import './App.css';
import Pad from './reactComponents/Pad';
import Display from './reactComponents/Display';
import bankData from './banksData';

function App() {
  let [appState, setAppState] = useState({
    power: true,
    currentBankData: bankData[0], // two values 0 or 1 for two banks of data
    display: ".",
    volume: 50
  });

function handlePowerState(powerBool) {
  setAppState({ 
    power: powerBool,
    currentBankData: appState.currentBankData, 
    display: appState.display,
    volume: appState.volume
  });
}

function handleBankChange(bankBool) {
  setAppState({ 
    power: appState.power,
    currentBankData: bankBool ? bankData[1] : bankData[0], // two values 0 or 1 for two banks of data, bankdata array change aording to bank switch
    display: appState.display,
    volume: appState.volume
  });
}

function handleDisplayName(audioName) {
  setAppState({ 
    power: appState.power,
    currentBankData: appState.currentBankData, 
    display: audioName,
    volume: appState.volume
    
  });
}

    // declare array of pads based on the currentbank of data that include the key to be shown and the audio URL to play when press.
  let renderPads = appState.currentBankData.map(
      item => (<Pad padPower={appState.power} audioURL={item.audioURL} letter={item.padLetter} padId={item.padLetter} displayAudioName={handleDisplayName} />)
    );

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

      <Display 
        displayName={appState.display} 
        changeBank={handleBankChange} 
        changePower={handlePowerState} 
      />
    </div>
  );
}

export default App;