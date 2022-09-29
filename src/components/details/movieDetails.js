import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [pelicula, setPelicula] = useState({});
  const { id } = useParams();

  const handleFavs = (e) => {
    e.preventDefault();
    axios.put("http://localhost:1337/users/moviefavorites", {
      token: localStorage.getItem("token"),
      id: id,
    });
    alert("Pelicula agregada a favoritos")
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d3e3599cdf12d2be08c7121522a40a44&language=en-US`
      )
      .then((peli) => setPelicula(peli.data));
  }, []);

  return (
    <>
    <h1 class="text-center font-monospace">
      {pelicula.original_title || pelicula.original_name}
    </h1>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <img src={`https://image.tmdb.org/t/p/w185/${pelicula.poster_path}`} />
        <p class="ms-3 me-2 mt-2">{pelicula.overview||"no description abilable"}</p>
        <button onClick={handleFavs} type="button" class="btn btn-warning btn-outline-secondary">Favorites</button>
      </li>
    </ul>
  </>
  );
};
export default MovieDetails;
