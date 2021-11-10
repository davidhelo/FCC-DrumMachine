import React, { useState } from 'react';
import './App.css';
import Pad from './reactComponents/Pad';
import Display from './reactComponents/Display';
import bankData from './banksData';

function App() {
  let [appState, setAppState] = useState({
    power: false,
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

function handleDisplayShow(textToShow) {
  setAppState({ 
    power: appState.power,
    currentBankData: appState.currentBankData, 
    display: textToShow,
    volume: appState.volume
    
  });
}

function updateVolume(vol) {
  setAppState({
    power: appState.power,
    currentBankData: appState.currentBankData, 
    display: appState.volume + vol < 0 ? 0 : appState.volume + vol > 100 ? 100 : appState.volume + vol,
    volume: appState.volume + vol < 0 ? 0 : appState.volume + vol > 100 ? 100 : appState.volume + vol
  });
}

    // declare array of pads based on the currentbank of data that include the key to be shown and the audio URL to play when press.
  let renderPads = appState.currentBankData.map(
      item => (
        <Pad 
          padVolume={appState.volume}
          padPower={appState.power} 
          audioURL={item.audioURL} 
          letter={item.padLetter} 
          padId={item.padLetter} 
          displayAudioName={handleDisplayShow} 
        />
      )
    );

  return (
    <div>
      <header className="App-header">
      <p>
        Drum Machine
      </p>
    </header>
      <div className="drumMachine" id="drum-machine">
      

        <div id="pads-wraper">
          {renderPads}
        </div>

        <Display 
          displayText={appState.display}
          changeBank={handleBankChange} 
          changePower={handlePowerState} 
          setVolume={updateVolume}
        />
      </div>
    </div>
  );
}

export default App;