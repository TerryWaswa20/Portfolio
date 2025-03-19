import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'; // You can style this with your custom CSS.

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Welcome To my Portfolio
        </Link>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Portfolio" className="navbar-link">
              My Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
