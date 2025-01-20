import React from "react";

function MovieItem({ movie, addToFavorites }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <button onClick={() => addToFavorites(movie)}>Add to favorites</button>
    </div>
  );
}

export default MovieItem;
