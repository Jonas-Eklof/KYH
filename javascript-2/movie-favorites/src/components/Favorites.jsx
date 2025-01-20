import React from "react";

function Favorites({ favorites, removeFromFavorites }) {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={() => removeFromFavorites(movie.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
