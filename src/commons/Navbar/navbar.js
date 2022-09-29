import React from "react";
import Logged from "./logged";
import NotLogged from "./notLogged";

const Navbar = () => {
  const token = localStorage.getItem("token")
  
  return (
    <>
    {token ? <Logged/>: <NotLogged/>} 
    </>
    
  );
};

export default Navbar;
