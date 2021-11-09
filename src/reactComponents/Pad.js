import './Pad.css';

// review this function and how to handle the click in each button
function Pad(props) {

    function handleClick() {
        props.displayAudioName(props.audioURL.split('/').at(-1).replace(/[._-]/g, ' ').replace("mp3",''));
        const sound = document.getElementById(props.padId);
        sound.currentTime = 0;
        sound.play();
    };

    return (
        <div 
            id={props.padId + "-padId"}
            className="drum-pad" 
            onClick={handleClick}
            >

            {props.letter}

            <audio 
                id={props.padId}
                src={props.audioURL}
                className="clip"
                >
            </audio>
        </div>
    );
}

export default Pad;