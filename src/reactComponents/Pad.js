import React from "react";
import './Pad.css';

// review this function and how to handle the click in each button
function Pad(props) {

    function handleClick(key, audioURL) {
        console.log("key press: ", props.keyPress, "URL audio: ", props.audioURL);
    };

    return (
        <div 
            className="drum-pad">
            {props.letter}
        </div>
    );
}

export default Pad;