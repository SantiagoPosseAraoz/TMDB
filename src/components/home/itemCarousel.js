import React from "react";


const CI = ({ item, type }) => {
  return (
    <div class="carousel-item">
      <a href={`/search/${type}/${item.id}`}><img
        src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
        class="d-block w-100"
        alt={`${item.original_name || item.original_title}`}
      />
      </a>
    </div>
  );
};
export default CI;
