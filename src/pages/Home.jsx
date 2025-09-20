import Moviecard from "../components/MovieCard"
import { useState,useEffect } from "react"
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    // const movies = getPopularMovies() // we cannot write like this becasue everytime the page gets rendered it will again and again fetch the movies 
    const [movies, setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading, setLoading ] = useState(true);
    
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch (err) {
                console.log(err)
                setError("failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, []) //we run this useEffect when the array that we pass in changes if it doesnt then we dont run the fucntion 

    const handleSearch = async (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) return 
        if (loading) return 
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }
        catch (err) {
            console.log(err)
            setError("failed to search movies...")
        }
        finally {
            setLoading(false)
        }

        setSearchQuery("")
    }

    return <div className = "home">
        <form onSubmit = {handleSearch} className = "search-form">
            <input 
                type = "text" 
                placeholder="Search for movies..." 
                className = "search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type = "submit" className="search-button">Search</button>
        </form>

        {error && <div className = "error-message">{error}</div>}

        {loading ? (
                <div className="loading">Loading...</div>
        ) : (
            <div className = "movies-grid">
            {movies.map(movie => (
                // movie.title.toLowerCase().includes(searchQuery) && - we can do movie search like this
                <Moviecard movie = {movie} key = {movie.id}/>
            ))}
        </div>)
        }
    </div>
}

export default Home