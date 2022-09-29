import React from "react";
import SearchUser from "./searchUser";

const Logged = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    document.location.reload();
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light border border-dark p-2 mb-2 border-opacity-50 rounded shadow p-3 mb-5 bg-body rounded">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src="https://toppng.com/uploads/preview/home-icon-home-house-icon-house-icon-free-11553508857ouiuhg9nsa.png"
              width="30"
              height="30"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/profile">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={handleLogout} href="/">
                  Logout
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/search/movies">
                      Movies
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/search/tv">
                      Tv
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a class="dropdown-item" href="/users">
                      Users
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <SearchUser />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Logged;
