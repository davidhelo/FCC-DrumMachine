import { useDebugValue } from 'react';
import './display.css';

function Switch(props) {
    return (
        <label class="switch">
        <input type="checkbox" />
        <span class={props.classSpan}></span>
        </label>
        );
}

function VolumeSlider() {
    return (
        <div>
            <button> - </button>
            <label> Volume </label>
            <button> + </button>
        </div>
    );
    /*
    return (
        <div class="slidecontainer">
            <input 
                type="range" 
                min="1" 
                max="100" 
                value="50" 
                class="slider" 
                id="myRange" 
            />
        </div>
    );*/
}

function Display(props) {
    return (
        <div id="display">
            <div className="smallScreen">{props.displayName}</div>
            <label>Power</label>
            <Switch classSpan="slider" />

            <label>Sounds bank</label>
            <Switch classSpan="slider" />

            <VolumeSlider />
        </div>
        );
}

export default Display;