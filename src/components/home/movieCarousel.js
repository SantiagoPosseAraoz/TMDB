import React, { useEffect, useState } from "react";
import axios from "axios";
import CI from "./itemCarousel";

const MovieCarousel = () => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=d3e3599cdf12d2be08c7121522a40a44&language=en-US&page=1"
      )
      .then((res) => setPeliculas(res.data.results));
  }, []);
  return (
    <div class="container-sm">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://img.freepik.com/premium-vector/hand-drawn-cinema-seamless-pattern-with-movie-camera-clapper-board-cinema-reel-tape-popcorn-striped-box-film-ticket-3d-glasses-vector-illustration-doodle-style-white-background_192280-424.jpg?w=2000"
              class="d-block w-100"
              alt="..."
            />
          </div>
          {peliculas.map((item) => {
            return <CI item={item} type="movies"/>;
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default MovieCarousel;
