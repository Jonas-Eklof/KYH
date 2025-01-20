import { useState } from "react";
import FilterButtons from "./components/FilterButtons";
import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";

const API_KEY = "448ef0a6ec46a3354cfd26ad244ffcdd";

const genreMap = {
  Action: 28,
  Comedy: 35,
  Drama: 18,
  Horror: 27,
  Romance: 10749,
};

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState("All");

  const searchMovies = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  const addToFavorites = (movie) => {
    if (!favorites.find((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  const updateFilter = (genre) => setFilter(genre);

  const filteredFavorites = favorites.filter((movie) => {
    if (filter === "All") return true;
    return movie.genre_ids.includes(genreMap[filter]);
  });

  return (
    <div>
      <h1>Movie Favorites</h1>
      <input
        type="text"
        placeholder="Search for a movie"
        onKeyDown={(e) => {
          if (e.key === "Enter") searchMovies(e.target.value);
        }}
      />
      <FilterButtons updateFilter={updateFilter} />
      <MovieList movies={movies} addToFavorites={addToFavorites} />
      <Favorites
        favorites={filteredFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default App;
