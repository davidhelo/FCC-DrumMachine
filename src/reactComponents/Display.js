import './display.css';

function Switch(props) {

    function handleChange(event) {
        if (event.target.id === "powerSwitch") {
        props.changePower(event.target.checked);
        } else if (event.target.id === "bankSwitch") {
            props.changeBank(event.target.checked);
        }
    }

    return (
        <label className="switch displayItem">
            <input 
                id={props.id}
                type="checkbox" 
                onChange={handleChange}
            />
            <span className={props.classSpan} ></span>
        </label>
    );
}

function VolumeSlider(props) {

    function handleVolumeUp() {
        props.setVolume(2);
    }

    function handleVolumeDown() {
        props.setVolume(-2);
    }

    return (
        <div className="displayItem volume">
            <button 
                onClick={handleVolumeDown} 
                className="volumeButton"> 
                - 
            </button>

            <label> Volume </label>

            <button 
                onClick={handleVolumeUp} 
                className="volumeButton">
                + 
            </button>
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
            <div className="smallScreen">{props.displayText}</div>
            <label className="displayItem">Power</label>
            <Switch
                id="powerSwitch"
                classSpan="slider"
                changePower={props.changePower}
            />

            <label className="displayItem">Sounds bank</label>
            <Switch
                id="bankSwitch"
                classSpan="slider" 
                changeBank={props.changeBank} 
            />

            <VolumeSlider setVolume={props.setVolume} />
        </div>
        );
}

export default Display;