import React, { useEffect, useState } from "react";
import axios from "axios";
import CI from "./itemCarousel";

const TvCarousel = () => {
    const [tvs, setTvs] = useState([]);
    useEffect(() => {
      axios
        .get(
          "https://api.themoviedb.org/3/tv/popular?api_key=d3e3599cdf12d2be08c7121522a40a44&language=en-US&page=1"
        )
        .then((res) => setTvs(res.data.results));
    }, []);
    return (
        <div class="container-sm">
        <div
          id="tvCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.pinimg.com/originals/00/8c/71/008c71d4b8b1ae3cca84178cd3b32e72.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            {tvs.map((item) => {
              return <CI item={item} type="tv"/>;
            })}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#tvCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#tvCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
}
export default TvCarousel