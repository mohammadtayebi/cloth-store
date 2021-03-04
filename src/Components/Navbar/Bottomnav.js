import React from "react";
import { Link } from "react-router-dom";

const Bottomnav = () => {
  return (
    <div className="container">
      <ul className="nav-lists">
        <li>
          <Link to="/" className="nav-links">
            home
          </Link>
        </li>
        <li>
          <Link to="/About" className="nav-links">
            about
          </Link>
        </li>
        <li>
          <Link to="/Shop" className="nav-links">
            shop
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="nav-links">
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Bottomnav;
