import React from "react";
import MovieItem from "./MovieItem";

function MovieList({ movies, addToFavorites }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
}

export default MovieList;
