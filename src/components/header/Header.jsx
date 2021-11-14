import React from "react";
import "./header.styles.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <h1 className="logo">Happy Anniversary </h1>
        <ul className="navlinks">
          <Link to="home" className="links">
            <li>Home</li>
          </Link>
          <Link to="about" className="links">
            <li>About</li>
          </Link>
          <Link to="photos" className="links">
            <li>Photos</li>
          </Link>
          <Link to="love" className="links">
            <li>Love</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
