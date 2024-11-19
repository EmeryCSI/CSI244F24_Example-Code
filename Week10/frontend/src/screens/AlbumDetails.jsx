import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AlbumRepository from "../data/albumRepository";

function AlbumDetails() {
  const [album, setAlbum] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const albumRepo = new AlbumRepository();

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const data = await albumRepo.getAlbumById(id);
        setAlbum(data);
      } catch (err) {
        setError("Failed to fetch album details");
        console.error(err);
      }
    };

    fetchAlbum();
  }, [id]);

  if (error) return <div className="error">{error}</div>;
  if (!album) return <div>Loading...</div>;

  return (
    <div className="album-details">
      <h2>{album.title}</h2>
      <div className="album-info">
        <p>
          <strong>Artist:</strong> {album.artist}
        </p>
        <p>
          <strong>Year:</strong> {album.year}
        </p>
        <p>
          <strong>Genre:</strong> {album.genre}
        </p>
        <p>
          <strong>Label:</strong> {album.label}
        </p>
        <p>
          <strong>Tracks:</strong> {album.tracks}
        </p>
        <p>
          <strong>Length:</strong> {album.length}
        </p>
      </div>
    </div>
  );
}

export default AlbumDetails;
