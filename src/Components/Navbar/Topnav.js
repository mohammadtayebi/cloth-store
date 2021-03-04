import React from "react";
import "./nav.css";

const Topnav = ({ sideNav }) => {
  return (
    <div className="">
      <div className="d-flex justify-content-around my-5 align-items-center top-nav">
        <form action="" className="form-nav">
          <i className="fas fa-search text-muted"></i>
          <input type="text" placeholder="SEARCH" className="border-0 pl-3" />
        </form>
        <button className="nav-button">shoppers</button>
        <div className="d-flex">
          <i className="fas fa-user mx-2 text-muted nav-icons"></i>
          <i className="far fa-heart mx-2 text-muted nav-icons"></i>
          <i className="fas fa-shopping-cart mx-2 text-muted nav-icons"></i>
        </div>
        <i className="fas fa-bars bars" onClick={() => sideNav()}></i>
      </div>
    </div>
  );
};

export default Topnav;
