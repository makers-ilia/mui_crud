import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-button home-button">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-button about-button">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
