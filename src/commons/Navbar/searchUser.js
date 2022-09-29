import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchUser = () =>{
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const handleInput = (e)=>{
        e.preventDefault(
        setInput(e.target.value)
        )
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate(`/users/${input}`)
        document.location.reload()
    }
    
    return(
        <>
         <form class="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search user"
                aria-label="Search"
                onChange={handleInput}
              />
              <button class="btn btn-warning btn-outline-secondary" type="submit">
                Search
              </button>
            </form>
        </>
    )
}

export default SearchUser