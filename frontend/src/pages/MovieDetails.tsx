import { useParams } from "react-router-dom";
import movies from "../Data/movies.json";

function MovieDetails() {
    const { id } = useParams();

    const movie = movies.find((m: any) => m.id === Number(id));

    if (!movie) return <h2>Movie not found</h2>;

    return (
        <div className="container">
            <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: "300px", height: "450px", objectFit: "cover" }}
            />

            <h2>{movie.title}</h2>
            <p>⭐ {movie.rating}</p>
            <p>{movie.genre}</p>
            <p>{movie.storyline}</p>
        </div>
    );
}

export default MovieDetails;
