import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login")
    return axios
      .post("http://localhost:1337/users/", {
        userName: user,
        password: password,
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="user-input" class="form-label">
            User
          </label>
          <input
            type="text"
            class="form-control border border-dark p-2 mb-2 border-opacity-50"
            id="user-input"
            aria-describedby="user-help"
            placeholder="Username"
            name="userName"
            onChange={handleUser}
            required
          />
        </div>
        <div class="mb-3">
          <label for="login-password" class="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            class="form-control border border-dark p-2 mb-2 border-opacity-50"
            id="login-password"
            name="password"
            onChange={handlePassword}
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
