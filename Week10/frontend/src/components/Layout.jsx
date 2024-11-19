import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="app-container">
      <main className="main-content">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/albums"
          className={`nav-link ${
            location.pathname === "/albums" ? "active" : ""
          }`}
        >
          Albums
        </Link>
        <Link
          to="/create-album"
          className={`nav-link ${
            location.pathname === "/create-album" ? "active" : ""
          }`}
        >
          Create
        </Link>
      </nav>
    </div>
  );
}

export default Layout;
