import { useState } from "react";
import { searchTracks } from "../data/deezerRepo";

function MusicSearch({ setSearchResults }) {
  //we need a state variable that is connected to the form input
  const [searchQuery, setSearchQuery] = useState("");
  //loading is handled by a state variable
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return; //dont search if query is empty
    setLoading(true);
    try {
      const results = await searchTracks(searchQuery);
      //we got a response
      //what do we need to do with this array?
      //This is the setFunction from app.jsx
      setSearchResults(results.data);
    } catch (error) {
      console.error(`Search failed ${error}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search for a song..."
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled={loading}
        />
        <button disabled={loading} type="submit">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </>
  );
}

export default MusicSearch;
