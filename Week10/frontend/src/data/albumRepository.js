// Use Vite's environment variable syntax with VITE_ prefix
const API_BASE_URL = `${import.meta.env.VITE_API_URL}/albums`;

/**
 * Repository class that handles all album-related API operations
 * Implements CRUD (Create, Read, Update, Delete) operations
 */
class AlbumRepository {
  /**
   * Retrieves all albums from the database
   * @returns {Promise<Array>} A promise that resolves to an array of album objects
   * @throws {Error} If the network request fails or returns an error status
   */
  async getAllAlbums() {
    try {
        console.log(API_BASE_URL);
      // Make GET request to the base URL
      const response = await fetch(API_BASE_URL);
      // Check if the response status is in the 200-299 range
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse and return the JSON response
      return await response.json();
    } catch (error) {
      console.error("Error fetching albums:", error);
      throw error; // Re-throw the error for handling by the caller
    }
  }

  /**
   * Retrieves a single album by its ID
   * @param {string|number} id - The unique identifier of the album
   * @returns {Promise<Object>} A promise that resolves to the album object
   * @throws {Error} If the network request fails or returns an error status
   */
  async getAlbumById(id) {
    try {
      // Make GET request to the URL with the specific album ID
      const response = await fetch(`${API_BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching album with id ${id}:`, error);
      throw error;
    }
  }

  /**
   * Creates a new album in the database
   * @param {Object} albumData - The album data to be created
   * @returns {Promise<Object>} A promise that resolves to the created album object
   * @throws {Error} If the network request fails or returns an error status
   */
  async createAlbum(albumData) {
    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(albumData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error creating album:", error);
      throw error;
    }
  }

  // Update an existing album
  async updateAlbum(id, albumData) {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(albumData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error(`Error updating album with id ${id}:`, error);
      throw error;
    }
  }

  // Delete an album
  async deleteAlbum(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error(`Error deleting album with id ${id}:`, error);
      throw error;
    }
  }
}

export default AlbumRepository;
