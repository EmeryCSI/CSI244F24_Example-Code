// Import necessary routing components from react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import components for different routes
import Layout from "./components/Layout";
import Home from "./screens/Home";
import AlbumList from "./screens/AlbumList";
import CreateAlbum from "./screens/CreateAlbum";
import AlbumDetails from "./screens/AlbumDetails";
import "./App.css";

// Define the application's routing configuration
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Layout />, // Wrapper component that includes navigation
    children: [
      // Nested routes within the layout
      {
        path: "/",
        element: <Home />, // Home page component
      },
      {
        path: "/albums",
        element: <AlbumList />,
      },
      {
        path: "/albums/:id",
        element: <AlbumDetails />,
      },
      {
        path: "/create-album",
        element: <CreateAlbum />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
