import React, { useEffect, useState } from "react";
import Item from "./item";
import axios from "axios";

const Movies = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [url, setUrl] = useState("");

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value.split(" ").join("+"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(
      `https://api.themoviedb.org/3/search/movie?api_key=d3e3599cdf12d2be08c7121522a40a44&query=${busqueda}`
    );
  };

  useEffect(() => {
    axios.get(url).then((peli) => setPeliculas(peli.data.results))
  }, [url]);

  return (
    <>
      <h2 class="text-center font-monospace">Search movies</h2>
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <button class="btn btn-warning btn-outline-secondary border border-dark p-2 mb-2 border-opacity-50" type="submit">
            Search
          </button>
          <input
            type="text"
            class="form-control border border-dark p-2 mb-2 border-opacity-50"
            placeholder="Enter movie's name"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            onChange={handleBusqueda}
          />
        </div>
      </form>
      <div>
        <ul class="list-group">
          {peliculas.map((item) => {
            console.log(item)
            return <Item item={item} />;
          })}
        </ul>
      </div>
    </>
  );
};
export default Movies;
