import React from "react";
import "./header.styles.css";

import { Link } from "react-router-dom";

const Header = ({ loggedIn }) => {
  return (
    <div className="header">
      <nav className="navbar">
        <h1 className="logo">Happy 6th Year Anniversary Sawako!</h1>
        <ul className="navlinks">
          {!loggedIn && (
            <Link to="" className="links">
              <li>Login</li>
            </Link>
          )}

          {loggedIn && (
            <Link to="love" className="links">
              <li>Mini History</li>
            </Link>
          )}
          {loggedIn && (
            <Link to="love/card" className="links">
              <li>E-Card</li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
