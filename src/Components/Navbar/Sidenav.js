import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Sidenav = ({ closeNavbar }) => {
  return (
    <div>
      <div>
        <div className="nav-lists-responsive text-center">
          <button className="nav-button-responsive">shoppers</button>
          <ul className=" list-unstyled d-flex w-100">
            <li>
              <Link to="/" className="nav-links px-3 ">
                home
              </Link>
            </li>
            <li>
              <Link to="/About" className="nav-links px-3">
                about
              </Link>
            </li>
            <li>
              <Link to="/Shop" className="nav-links px-3">
                shop
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="nav-links px-3">
                contact
              </Link>
            </li>
          </ul>
        </div>
        {/* dark part of the responsive nav  */}
        <div className="back-drop" onClick={() => closeNavbar()}></div>
      </div>
    </div>
  );
};

export default Sidenav;
