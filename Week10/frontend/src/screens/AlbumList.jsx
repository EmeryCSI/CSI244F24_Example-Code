import { useState, useEffect } from "react";
import AlbumRepository from "../data/albumRepository";
import { Link } from "react-router-dom";

function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);
  const albumRepo = new AlbumRepository();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const data = await albumRepo.getAllAlbums();
        setAlbums(data);
      } catch (err) {
        setError("Failed to fetch albums");
        console.error(err);
      }
    };

    fetchAlbums();
  }, []);

  if (error) return <div className="error">{error}</div>;

  return (
    <div className="album-list">
      <h2>Album List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Label</th>
            <th>Tracks</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <td>
                <Link to={`/albums/${album.id}`}>{album.title}</Link>
              </td>
              <td>{album.artist}</td>
              <td>{album.year}</td>
              <td>{album.genre}</td>
              <td>{album.label}</td>
              <td>{album.tracks}</td>
              <td>{album.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlbumList;
