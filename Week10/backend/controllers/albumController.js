const Album = require('../models/album');

/**
 * AlbumController class
 * Handles all HTTP requests related to albums and interfaces with the Album model
 * Implements RESTful API endpoints for CRUD operations
 */
class AlbumController {
  /**
   * Retrieves all albums from the database
   * GET /albums
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @returns {Array} JSON array of all albums
   */
  static async getAllAlbums(req, res) {
    try {
      const albums = await Album.getAll();
      res.json(albums);
    } catch (error) {
      // If any error occurs during the operation, return 500 Internal Server Error
      res.status(500).json({ error: error.message });
    }
  }

  /**
   * Retrieves a single album by its ID
   * GET /albums/:id
   * @param {Object} req - Express request object (contains id parameter)
   * @param {Object} res - Express response object
   * @returns {Object} JSON object of the requested album or 404 if not found
   */
  static async getAlbumById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const album = await Album.getById(id);

      if (album) {
        res.json(album);
      } else {
        // If album is not found, return 404 Not Found
        res.status(404).json({ message: 'Album not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  /**
   * Creates a new album
   * POST /albums
   * @param {Object} req - Express request object (contains album data in body)
   * @param {Object} res - Express response object
   * @returns {Object} JSON object of the newly created album
   */
  static async createAlbum(req, res) {
    try {
      const newAlbum = await Album.create(req.body);
      // Return 201 Created status code with the new album
      res.status(201).json(newAlbum);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update an album
  static async updateAlbum(req, res) {
    try {
      const id = parseInt(req.params.id);
      const updatedAlbum = await Album.update(id, req.body);

      if (updatedAlbum) {
        res.json(updatedAlbum);
      } else {
        res.status(404).json({ message: 'Album not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete an album
  static async deleteAlbum(req, res) {
    try {
      const id = parseInt(req.params.id);
      const deletedAlbum = await Album.delete(id);

      if (deletedAlbum) {
        res.json({ message: 'Album deleted successfully' });
      } else {
        res.status(404).json({ message: 'Album not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AlbumController; 