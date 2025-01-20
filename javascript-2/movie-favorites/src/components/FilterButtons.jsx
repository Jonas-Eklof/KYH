import React from "react";

function FilterButtons({ updateFilter }) {
  const genres = ["All", "Action", "Comedy", "Drama"];

  return (
    <div>
      {genres.map((genre) => (
        <button key={genre} onClick={() => updateFilter(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
