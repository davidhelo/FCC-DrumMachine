import './display.css';

function Switch(props) {

    function handleChange(event) {
        console.log(event.target.id);
        if (event.target.id === "powerSwitch") {
        props.changePower(event.target.checked);
        } else if (event.target.id === "bankSwitch") {
            props.changeBank(event.target.checked);
        }
    }

    return (
        <label className="switch">
            <input 
                id={props.id}
                type="checkbox" 
                onChange={handleChange}
            />
            <span className={props.classSpan} ></span>
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
            <Switch
                id="powerSwitch"
                classSpan="slider"
                changePower={props.changePower}
            />

            <label>Sounds bank</label>
            <Switch
                id="bankSwitch"
                classSpan="slider" 
                changeBank={props.changeBank} 
            />

            <VolumeSlider />
        </div>
        );
}

export default Display;