import { useState, useEffect } from "react";

function PlaceholderAPI() {
  // State management using hooks:
  // - posts: stores the fetched posts data
  // - isLoading: tracks the loading state of the API request
  // - error: stores any error messages that occur during fetching
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function to fetch posts from the API
    const fetchPosts = async () => {
      try {
        // Make GET request to JSONPlaceholder API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        // Parse the JSON response
        const data = await response.json();
        // Update state with the fetched posts
        setPosts(data);
        // Set loading to false since data fetch is complete
        setIsLoading(false);
      } catch (err) {
        // If any error occurs during fetching, store the error message
        setError(err.message);
        // Set loading to false even if there's an error
        setIsLoading(false);
      }
    };

    // Call the fetch function when component mounts
    fetchPosts();
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  // Show loading state while data is being fetched
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  // Show error message if fetch failed
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render posts grid once data is loaded successfully
  return (
    <div>
      <h1>Posts from JSONPlaceholder</h1>
      <div>
        {/* Map through posts array and render each post as a card */}
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaceholderAPI;
