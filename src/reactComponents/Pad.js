import './Pad.css';

// review this function and how to handle the click in each button
function Pad(props) {

    function handleClick() {
        const sound = document.getElementById(props.padId);
        sound.currentTime = 0;
        sound.play();
    };

    return (
        <div 
            className="drum-pad" 
            onClick={handleClick}
            >

            {props.letter}

            <audio 
                id={props.padId}
                src={props.audioURL}
                >
            </audio>
        </div>
    );
}

export default Pad;