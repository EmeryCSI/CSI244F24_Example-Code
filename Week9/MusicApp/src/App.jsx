import "./App.css";
import { useState } from "react";
import MusicSearch from "./components/MusicSearch";
import TrackList from "./components/TrackList";
import MusicPlayer from "./components/MusicPlayer";
function App() {
  //the array of songs
  const [searchResults, setSearchResults] = useState([]);
  //the selected song
  const [currentTrack, setCurrentTrack] = useState(null);
  console.log(searchResults);
  return (
    <div className="app-container">
      <h2>Deezer Music App</h2>
      <MusicSearch setSearchResults={setSearchResults} />
      <TrackList
        searchResults={searchResults}
        setCurrentTrack={setCurrentTrack}
      />
      {currentTrack && <MusicPlayer currentTrack={currentTrack} />}
    </div>
  );
}

export default App;
