import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <NavLink className="navbar-brand p-5" to="#">
        REACT
      </NavLink>
      <NavLink className="nav-link" to="/">
        Home <span className="sr-only">(current)</span>
      </NavLink>
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default NavBar;
