import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h3>🎬 Movie-Site</h3>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/watchlist">Watchlist</Link>
            </div>
        </nav>
    );
}

export default Navbar;
