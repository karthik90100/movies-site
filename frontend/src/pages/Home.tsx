import movies from "../Data/movies.json";
import MovieCard from "../components/MovieCard";

function Home() {
    return (
        <div className="container">
            <h1 className="page-title">🎬 Movie Watchlist & Review Platform</h1>

            <div className="movie-grid">
                {movies.map((movie: any) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;
