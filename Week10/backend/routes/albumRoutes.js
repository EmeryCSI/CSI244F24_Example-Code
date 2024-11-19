const express = require('express');
const router = express.Router();
const AlbumController = require('../controllers/albumController');

/**
 * Album Routes
 * Defines all routes for album-related operations
 * Base path: /albums
 */

/**
 * GET /albums
 * Retrieves all albums from the database
 * @returns {Array} JSON array of all albums
 */
router.get('/', AlbumController.getAllAlbums);

/**
 * GET /albums/:id
 * Retrieves a specific album by ID
 * @param {number} id - Album ID in URL parameter
 * @returns {Object} JSON object of requested album
 */
router.get('/:id', AlbumController.getAlbumById);

/**
 * POST /albums
 * Creates a new album
 * @body {Object} album - Album data in request body
 * @returns {Object} JSON object of created album
 */
router.post('/', AlbumController.createAlbum);

/**
 * PUT /albums/:id
 * Updates an existing album
 * @param {number} id - Album ID in URL parameter
 * @body {Object} album - Updated album data in request body
 * @returns {Object} JSON object of updated album
 */
router.put('/:id', AlbumController.updateAlbum);

/**
 * DELETE /albums/:id
 * Deletes an album
 * @param {number} id - Album ID in URL parameter
 * @returns {Object} Success message if deleted
 */
router.delete('/:id', AlbumController.deleteAlbum);

module.exports = router; 