import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/home/home";
import Movies from "./components/search/searchMovies";
import Navbar from "./commons/Navbar/navbar";
import Login from "./components/login/login";
import Register from "./components/login/register";
import TV from "./components/search/searchTv";
import MovieDetails from "./components/details/movieDetails";
import TvDetails from "./components/details/tvDetails";
import Profile from "./components/profile/profile";
import Users from "./components/users/users";
import UserPage from "./components/users/userPage";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <div class="container">
        <h1 class="text-center font-monospace">The Movie Database</h1>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/register" element={<Register />} />
          <Route path="/search/movies" element={<Movies />} />
          <Route path="/search/movies/:id" element={<MovieDetails />} />
          <Route path="/search/tv/:id" element={<TvDetails />} />
          <Route path="/search/tv" element={<TV />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userName" element={<UserPage />} />
        </Routes>
      </div>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
