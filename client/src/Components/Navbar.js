import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <NavLink to="/" className="navbar-brand">
        Exercise Tracker
      </NavLink>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <NavLink to="/" className="nav-link" exact activeClassName="active">
            Exercises
          </NavLink>
          <NavLink
            to="/create"
            className="nav-link"
            exact
            activeClassName="active"
          >
            Create Exercise Log
          </NavLink>
          <NavLink
            to="/user"
            className="nav-link"
            exact
            activeClassName="active"
          >
            Create User
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
