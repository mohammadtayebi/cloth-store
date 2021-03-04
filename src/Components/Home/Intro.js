import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="position-relative ">
      <div className="image-intro pt-0 pt-md-5 d-flex align-items-center">
        <div className="container">
          <div className="info-intro row row align-items-start align-items-md-center justify-content-end mt-lg-5">
            <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
              <h1 className="font-weight-bolder">
                Finding your <br /> Perfect Cloth
              </h1>
              <p className="text-justify my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.{" "}
              </p>
              <button className="buttons">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
