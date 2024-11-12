import { useEffect, useRef } from "react";
function MusicPlayer({ currentTrack }) {
  //useRef is Reacts version of getElementByID
  const audioRef = useRef(null);
  //we want an effect() that fires when the component renders
  //AND everytime currentTrack Changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentTrack]);
  return (
    <div className="music-player">
      <div className="now-playing">
        <img src={currentTrack.album.cover_medium} />
        <div className="track-info">
          <h2>{currentTrack.title}</h2>
          <p>{currentTrack.artist.name}</p>
        </div>
        <audio ref={audioRef} controls>
          <source src={currentTrack.preview} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default MusicPlayer;
