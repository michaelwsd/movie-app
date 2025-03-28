import { Link } from "react-router-dom";
import "../css/NavBar.css";

export function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/movie-app">Movie Vault</Link>
            </div>
            <div className="navbar-links">
                <Link to="/movie-app" className="nav-link">Home</Link>
                <Link to="/movie-app/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}