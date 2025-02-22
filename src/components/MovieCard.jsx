import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";

// prop is an object we can pass in to dynamically change the component 
export function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFavorite} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavClick(e) {
        e.preventDefault();
        if (favorite) removeFavorite(movie.id);
        else addToFavorites(movie);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://images.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}