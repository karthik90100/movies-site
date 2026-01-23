import { Link } from "react-router-dom";

function MovieCard({ movie }: any) {
    return (
        <div className="movie-card">
            <img src={movie.poster} alt={movie.title} />

            <div className="movie-card-content">
                <h3>{movie.title}</h3>
                <p>⭐ {movie.rating}</p>
                <p>{movie.genre}</p>

                <Link to={`/movie/${movie.id}`}>View Details</Link>
            </div>
        </div>
    );
}

export default MovieCard;
