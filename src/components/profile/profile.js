import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavM from "../utils/movieFavs";
import FavTv from "../utils/tvFavs";

const Profile = () => {
  const [user, setUser] = useState("");
  const [favsM, setFavsM] = useState([]);
  const [favsTv, setFavsTv] = useState([]);
  useEffect(async () => {
    let usuario = await axios.post("http://localhost:1337/users/especifico", {
      token: localStorage.getItem("token"),
    });
    setFavsM(usuario.data.movieFavorites);
    setFavsTv(usuario.data.tvFavorites);
    setUser(usuario.data.userName);
  }, []);

  return (
    <>
      <h1 class="text-center font-monospace">{user}</h1>
      <div>
        <h2 class="text-center font-monospace">Movies</h2>
        <ul class="list-group">
          {favsM.length ? (
            favsM.map((fav) => {
              return <FavM fav={fav} />;
            })
          ) : (
            <li class="list-group-item d-flex justify-content-between align-items-start">
               <Link
            to={"/search/movies"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Add movies here
          </Link>
            </li>
          )}
        </ul>
        <h2 class="text-center font-monospace">Tv</h2>
        <ul class="list-group">
          {favsTv.length ? (
            favsTv.map((fav) => {
              return <FavTv fav={fav} />;
            })
          ) : (
            <li class="list-group-item d-flex justify-content-between align-items-start">
               <Link
            to={"/search/tv"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Add series here
          </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Profile;
