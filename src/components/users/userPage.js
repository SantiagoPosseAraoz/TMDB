import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FavTvU from "../utils/tvFavsUsers";
import FavMU from "../utils/movieFavsUsers";

const UserPage = () => {
  const [name, setName] = useState("");
  const [favM, setFavM] = useState([]);
  const [favTv, setFavTv] = useState([]);
  const { userName } = useParams();
  useEffect(async () => {
    const usuario = await axios.post("http://localhost:1337/users/traer", {
      userName,
    });
    setName(usuario.data.userName);
    setFavM(usuario.data.movieFavorites);
    setFavTv(usuario.data.tvFavorites);
  }, []);
  return (
    <>
      <h1 class="text-center font-monospace">{name}</h1>
      <h2 class="text-center font-monospace">Movies</h2>
      <ul class="list-group">
        {favM.length ? (
          favM.map((fav) => {
            return <FavMU fav={fav} />;
          })
        ) : (
          <li class="list-group-item d-flex justify-content-between align-items-start">
            No movies here!
          </li>
        )}
      </ul>
      <h2 class="text-center font-monospace">Tv</h2>
      <ul class="list-group">
        {favTv.length ? (
          favTv.map((fav) => {
            return <FavTvU fav={fav} />;
          })
        ) : (
          <li class="list-group-item d-flex justify-content-between align-items-start">
            No series here
          </li>
        )}
      </ul>
    </>
  );
};

export default UserPage;
