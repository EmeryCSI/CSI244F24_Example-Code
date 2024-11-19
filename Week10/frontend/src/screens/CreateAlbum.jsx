import React, { useState } from "react";
import AlbumRepository from "../data/albumRepository";

function CreateAlbum() {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    year: "",
    genre: "",
  });
  const albumRepo = new AlbumRepository();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await albumRepo.createAlbum(formData);
      // Reset form
      setFormData({ title: "", artist: "", year: "", genre: "" });
      // You might want to add navigation or success message here
    } catch (error) {
      console.error("Error creating album:", error);
      // Handle error (show message to user)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="create-album">
      <h2>Create New Album</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Create Album
        </button>
      </form>
    </div>
  );
}

export default CreateAlbum;
