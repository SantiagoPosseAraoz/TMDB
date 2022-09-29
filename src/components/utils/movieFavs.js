import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FavM = ({ fav }) => {
  const [title, setTitle] = useState("default");

  const handleDelete = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:1337/users/especifico/movies/${fav}`, {
      token: localStorage.getItem("token"),
    });
    document.location.reload();
  };

  useEffect(() => {
    //almacenar respuesta en una variable, para poder utilizar diferentes states despues sobre ella
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${fav}?api_key=d3e3599cdf12d2be08c7121522a40a44&language=en-US`
      )
      .then((item) => setTitle(item.data.original_title));
  }, []);

  return (
    <li
      id={fav.id}
      class="list-group-item d-flex justify-content-between align-items-start"
    >
      <div class="ms-2 me-auto">
        <div class="fw-bold text-decoration-none">
          <Link
            to={"/search/movies/" + fav}
            style={{ textDecoration: "none", color: "black" }}
          >
            {title}
          </Link>
        </div>
      </div>
      <span class="badge bg-warning rounded-pill" onClick={handleDelete}>
        X
      </span>
    </li>
  );
};

export default FavM;
