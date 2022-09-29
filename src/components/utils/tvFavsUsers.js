import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FavTvU = ({ fav }) => {
  const [title, setTitle] = useState("default");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${fav}?api_key=d3e3599cdf12d2be08c7121522a40a44&language=en-US`
      )
      .then((item) =>
        setTitle(item.data.original_title || item.data.original_name)
      );
  }, []);

  return (
    <li
      id={fav.id}
      class="list-group-item d-flex justify-content-between align-items-start"
    >
      <div class="ms-2 me-auto">
        <div class="fw-bold">
          {" "}
          <Link
            to={"/search/tv/" + fav}
            style={{ textDecoration: "none", color: "black" }}
          >
            {title}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default FavTvU;
