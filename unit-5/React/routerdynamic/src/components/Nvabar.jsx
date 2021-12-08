import React from "react";
import "./navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active" to="/product">
        Product
      </NavLink>
    </div>
  );
}
export default Navbar;
