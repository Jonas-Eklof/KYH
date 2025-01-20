import React from "react";

function FilterButtons({ updateFilter, currentFilter }) {
  const filters = ["all", "completed", "incomplete"];

  return (
    <div>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => updateFilter(filter)}
          style={{ fontWeight: filter === currentFilter ? "bold" : "normal" }}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
