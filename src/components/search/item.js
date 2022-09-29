import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const handleClick = () => {
    let elemento = document.getElementById(item.id);
    let description = document.getElementById(item.id + "d");
    elemento.classList.toggle("active");
    description.innerHTML === item.overview
      ? (description.innerHTML = item.overview.substring(0, 200) + "...")
      : (description.innerHTML = item.overview);
  };

  return (
    <li
      id={item.id}
      class="list-group-item d-flex justify-content-between align-items-start"
    >
      <div class="ms-2 me-auto">
        <div class="fw-bold">
          <Link
            to={"" + item.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            {item.original_title || item.original_name}
          </Link>
        </div>
        <div id={item.id + "d"}>{item.overview.substring(0, 200) + "..."} </div>
      </div>
      <span class="badge bg-warning rounded-pill text-dark" onClick={handleClick}>
        +
      </span>
    </li>
  );
};

export default Item;
