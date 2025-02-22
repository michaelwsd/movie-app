import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

// provide state to any of the components that are wrapped inside it
// allows all components inside it (children) to access the states we defined 
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);
    
    // check if there are favorites already stored
    useEffect (() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) setFavorites(JSON.parse(storedFavs)); 
    }, []);

    // if any of the favorites change, rerender it 
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]); 

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]);
    }

    const removeFavorite = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    // allow all components inside to access these values 
    const values = {
        favorites, 
        addToFavorites,
        removeFavorite,
        isFavorite
    }

    return (
        // provides data or state to all child components wrapped inside it
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}