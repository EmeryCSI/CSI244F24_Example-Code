function TrackList({ searchResults, setCurrentTrack }) {
  //   console.log(searchResults);
  //   console.log(setCurrentTrack);
  return (
    <div className="track-list">
      {/* we want to go through searchResults and make some markup for each track */}
      {searchResults.map((track) => (
        <div
          key={track.id}
          className="track-item"
          onClick={() => setCurrentTrack(track)}
        >
          <img src={track.album.cover_small} alt={track.album.title} />
          <div className="track-info">
            <h3>{track.title}</h3>
            <p>{track.artist.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrackList;
