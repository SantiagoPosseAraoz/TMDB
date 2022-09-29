import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./user";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/users")
      .then((users) => setUsers(users.data));
  }, []);

  return (
    <>
      <div>
        <h1>Registered users</h1>
        <ul class="list-group ">
          {users.map((user) => {
            return <User key={user.id} user={user} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Users;
