import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screens/Home";
import AlbumList from "./screens/AlbumList";
import CreateAlbum from "./screens/CreateAlbum";
import AlbumDetails from "./screens/AlbumDetails";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
