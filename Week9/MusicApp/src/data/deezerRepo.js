/**
 * Repository class for interacting with the Deezer API through RapidAPI
 * Provides methods for searching and retrieving music-related data
 */

// Initialize base configuration
const getConfig = () => {
  if (
    !import.meta.env.VITE_RAPID_API_KEY ||
    !import.meta.env.VITE_RAPID_API_HOST
  ) {
    throw new Error("Missing API credentials in environment variables");
  }

  return {
    baseUrl: import.meta.env.VITE_DEEZER_BASE_URL,
    options: {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
      },
    },
  };
};

/**
 * Retrieves general information about the Deezer API
 * @returns {Promise<Object>} API information and status
 * @throws {Error} If the API request fails
 */
export async function getInfo() {
  const { baseUrl, options } = getConfig();
  try {
    const response = await fetch(`${baseUrl}/infos`, options);
    return await response.json();
  } catch (error) {
    console.error("Error fetching Deezer info:", error);
    throw error;
  }
}

/**
 * Searches for tracks matching the provided query
 * @param {string} query - The search term to look for
 * @returns {Promise<Object>} Search results containing matching tracks
 * @throws {Error} If the API request fails
 */
export async function searchTracks(query) {
  const { baseUrl, options } = getConfig();
  try {
    const safeQuery = encodeURIComponent(query);
    const response = await fetch(`${baseUrl}/search?q=${safeQuery}`, options);
    return await response.json();
  } catch (error) {
    console.error("Error searching tracks:", error);
    throw error;
  }
}

/**
 * Retrieves detailed information about a specific track
 * @param {string|number} trackId - The unique identifier of the track
 * @returns {Promise<Object>} Detailed track information
 * @throws {Error} If the API request fails
 */
export async function getTrack(trackId) {
  const { baseUrl, options } = getConfig();
  try {
    const response = await fetch(`${baseUrl}/track/${trackId}`, options);
    return await response.json();
  } catch (error) {
    console.error("Error fetching track:", error);
    throw error;
  }
}

/**
 * Retrieves detailed information about a specific artist
 * @param {string|number} artistId - The unique identifier of the artist
 * @returns {Promise<Object>} Detailed artist information
 * @throws {Error} If the API request fails
 */
export async function getArtist(artistId) {
  const { baseUrl, options } = getConfig();
  try {
    const response = await fetch(`${baseUrl}/artist/${artistId}`, options);
    return await response.json();
  } catch (error) {
    console.error("Error fetching artist:", error);
    throw error;
  }
}
