// Required Node.js modules
const fs = require('fs');    // File System module for reading/writing files
const path = require('path'); // Path module for handling file paths

// Define the path to our JSON data file using path.join to ensure cross-platform compatibility
const filePath = path.join(__dirname, '..', 'data', 'albums.json');

/**
 * Album class
 * Represents the data model for albums and handles all database operations
 * Implements CRUD operations using file system as storage
 */
class Album {
  /**
   * Creates a new Album instance
   * @param {Object} data - Album data including id, title, artist, etc.
   */
  constructor(data) {
    this.id = data.id;         // Unique identifier for the album
    this.title = data.title;   // Album title
    this.artist = data.artist; // Artist name
    this.year = data.year;     // Release year
    this.genre = data.genre;   // Music genre
    this.label = data.label;   // Record label
    this.tracks = data.tracks; // List of tracks
    this.length = data.length; // Album duration
  }

  /**
   * Retrieves all albums from the JSON file
   * @returns {Promise<Array>} Array of Album instances
   */
  static async getAll() {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(data).map(album => new Album(album));
  }

  /**
   * Finds an album by its ID
   * @param {number} id - The ID of the album to find
   * @returns {Promise<Album|null>} Album instance if found, null otherwise
   */
  static async getById(id) {
    const albums = await this.getAll();
    const album = albums.find(a => a.id === parseInt(id));
    return album || null;
  }

  /**
   * Creates a new album in the database
   * @param {Object} album - Album data without ID
   * @returns {Promise<Album>} Newly created Album instance
   */
  static async create(album) {
    const albums = await this.getAll();
    // Generate new ID by finding maximum existing ID and adding 1
    const newId = albums.length > 0 ? Math.max(...albums.map(a => a.id)) + 1 : 1;
    const newAlbum = new Album({ id: newId, ...album });
    albums.push(newAlbum);
    await fs.promises.writeFile(filePath, JSON.stringify(albums, null, 2));
    return newAlbum;
  }

  /**
   * Updates an existing album
   * @param {number} id - ID of the album to update
   * @param {Object} updatedAlbum - New album data
   * @returns {Promise<Album|null>} Updated Album instance or null if not found
   */
  static async update(id, updatedAlbum) {
    const albums = await this.getAll();
    const index = albums.findIndex(album => album.id === parseInt(id));
    if (index !== -1) {
      // Preserve the existing ID while updating other properties
      albums[index] = new Album({ ...albums[index], ...updatedAlbum });
      await fs.promises.writeFile(filePath, JSON.stringify(albums, null, 2));
      return albums[index];
    }
    return null;
  }

  static async delete(id) {
    const albums = await this.getAll();
    const index = albums.findIndex(album => album.id === parseInt(id));
    if (index !== -1) {
      const deletedAlbum = albums.splice(index, 1)[0];
      await fs.promises.writeFile(filePath, JSON.stringify(albums, null, 2));
      return deletedAlbum;
    }
    return null;
  }
}

// Export static methods for use in other files
// Note: We're not exporting the class itself, only its static methods
module.exports = {
  getAll: Album.getAll,
  getById: Album.getById,
  create: Album.create,
  update: Album.update,
  delete: Album.delete,
}; 