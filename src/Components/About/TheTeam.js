import React from "react";
import men from "../../utils/mpro.jpg";
import women from "../../utils/wpro.jpg";
const TheTeam = () => {
  return (
    <div className="my-5">
      <div className="container py-5">
        <h2 className="text-center">The Team</h2>
        <hr className="w-25 text-danger pb-5" />
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-6 text-center pb-md-3 pb-lg-0">
            <img className="img-fluid w-75" src={men} alt="" />
            <h4 className="">Some name</h4>
            <p className="text-muted pb-3">Co-Founder</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut
              minima nihil sit distinctio recusandae doloribus ut fugit officia
              voluptate soluta.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 text-center pb-md-3 pb-lg-0">
            <img className="img-fluid w-75" src={women} alt="" />
            <h4>Some name</h4>
            <p className="text-muted pb-3">CEO/Co-Founder</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut
              minima nihil sit distinctio recusandae doloribus ut fugit officia
              voluptate soluta.{" "}
            </p>
          </div>
          <div className="col-lg-3 col-md-6 text-center pb-md-3 pb-lg-0">
            <img className="img-fluid w-75" src={men} alt="men " />
            <h4>Some name</h4>
            <p className="text-muted pb-3">Marketing</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut
              minima nihil sit distinctio recusandae doloribus ut fugit officia
              voluptate soluta.{" "}
            </p>
          </div>
          <div className="col-lg-3 col-md-6 text-center pb-md-3 pb-lg-0">
            <img className="img-fluid w-75" src={women} alt="" />
            <h4>Some name</h4>
            <p className="text-muted pb-3">Sales Manager</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut
              minima nihil sit distinctio recusandae doloribus ut fugit officia
              voluptate soluta.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
