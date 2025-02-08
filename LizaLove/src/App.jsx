import { useState, useRef, useEffect } from 'react';
import reasons from './reasons';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import VolumeUpSharpIcon from '@mui/icons-material/VolumeUpSharp';
import VolumeMuteSharpIcon from '@mui/icons-material/VolumeMuteSharp';
import images from './images';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const audioRef = useRef(null);

  const clickBack = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const clickForward = () => {
    if (count < reasons.length - 1) {
      setCount(count + 1);
    }
  };

  const handleAudioClick = () => {
    setAudioEnabled(!audioEnabled);
    if (audioEnabled) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };
  return (
    <div className="appContainer">
      {/* Audio Button (Fixed Position) */}
      <button className="audioButton" onClick={handleAudioClick}>
        {audioEnabled ? (
          <VolumeUpSharpIcon sx={{ fontSize: 32, color: 'black' }} />
        ) : (
          <VolumeMuteSharpIcon sx={{ fontSize: 32, color: 'black' }} />
        )}
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} src="/assets/song.mp3" loop preload="auto"/>
        
      {/* Image Section */}
      <div className="image-container">
        <img src={"/assets/gsdrg.gif"} className="hat photo floating" alt="Displayed Image" />
        <img src={"/assets/gsdrg.gif"} className="hat photo floating" alt="Displayed Image" />
        <img src={"/assets/" + images[count]} className="hat photo floating" alt="Displayed Image" />
        <img src={"/assets/gsdrg.gif"} className="hat photo floating" alt="Displayed Image" />
        <img src={"/assets/gsdrg.gif"} className="hat photo floating" alt="Displayed Image" />
      </div>

      {/* Text Section */}
      <div className="card">
        <h1>{reasons[count]}</h1>
      </div>

      {/* Button Controls */}
      <div className="buttons">
        <button className="nextButton" onClick={clickBack}>
          <KeyboardTabIcon sx={{ transform: 'scaleX(-1)' }} />
        </button>
        <button className="nextButton" onClick={clickForward}>
          <KeyboardTabIcon />
        </button>
      </div>
    </div>
  );
}

export default App;
