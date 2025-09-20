import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext"
import Moviecard from "../components/MovieCard"

function Favorites()  {
    const {favorites} = useMovieContext();

    if (favorites) {
        return <div className = "favorites">
            <h2>Your Favorites</h2>
        <div className = "movies-grid">
            {favorites.map(movie => (
                // movie.title.toLowerCase().includes(searchQuery) && - we can do movie search like this
                <Moviecard movie = {movie} key = {movie.id}/>
            ))}
        </div>
        </div>
    }
    
    return <div className="Favorites-empty">
        <h2>No favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will be up here</p>
    </div>
}

export default Favorites
