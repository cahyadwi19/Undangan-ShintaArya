import { useRef, useState } from "react";
import { AudioContext } from "./audioContextDef";

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const toggle = () => {
    if (playing) {
      pause();
    } else {
      play();
    }
  };

  return (
    <AudioContext.Provider value={{ audioRef, playing, play, pause, toggle }}>
      <audio ref={audioRef} loop>
        <source
          src={`${import.meta.env.BASE_URL}music/wedding-song.mp3`}
          type="audio/mp3"
        />
      </audio>
      {children}
    </AudioContext.Provider>
  );
}
