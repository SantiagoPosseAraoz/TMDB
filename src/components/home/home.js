import React from "react";
import MovieCarousel from "./movieCarousel";
import TvCarousel from "./tvCarousel";

const Home = () => {
  return (
    <div class="container">
      <span class="float-start">
        <h2 class="text-center font-monospace">Movies</h2>
        <MovieCarousel />
      </span>
      <span class="float-end">
        <h2 class="text-center font-monospace">Tv</h2>
        <TvCarousel />
      </span>
    </div>
  );
};

export default Home;
