import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="chairmart">chairmart</h1>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">cart</Link>
      </div>
    </div>
  );
}

export default Navbar;
