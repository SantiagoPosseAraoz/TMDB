import React from "react";
import {Link} from "react-router-dom"

const User = ({user})=>{
    return(
        <li
        key={user.id}
        class="list-group-item d-flex justify-content-between align-items-start "
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">
            <Link
              to={""+user.userName}
              style={{ textDecoration: "none", color: "black" }}
            >
              {user.userName}
            </Link>
          </div>
        </div>
      </li>
    )
}

export default User