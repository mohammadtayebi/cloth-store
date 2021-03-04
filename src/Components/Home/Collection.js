import React from "react";
import { Link } from "react-router-dom";
import Women from "../../utils/w1.jpg";
import men from "../../utils/w2.jpg";
import jelwry from "../../utils/j2.jpg";
import computer from "../../utils/c1.jpg";

import "./Collection.css";
import { useFilterContext } from "../../contex/filter_context";

const Collection = () => {
  const {
    menSelect,
    womanSelect,
    jewerlySelect,
    electronicsSelect,
  } = useFilterContext();

  return (
    <div className="my-5 pb-5">
      <hr className="py-5" />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 col-md-4 col-sm-6 collection my-3"
            style={{ height: "25rem" }}
          >
            <Link to="/shop">
              <img
                src={Women}
                alt=""
                className="img-fluid h-100  collection-img"
                onClick={womanSelect}
              />
              <div className="collection-image-container">
                <h1>Women</h1>
              </div>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 collection my-3"
            style={{ height: "25rem" }}
          >
            <Link to="/shop" name="manBox" value="manBox" onClick={menSelect}>
              <img
                src={men}
                alt=""
                className="img-fluid  h-100 collection-img"
              />
              <div className="collection-image-container">
                <h1>Men</h1>
              </div>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 collection my-3"
            style={{ height: "25rem" }}
          >
            <Link to="/shop">
              <img
                src={jelwry}
                alt=""
                className="img-fluid h-100  collection-img"
                onClick={jewerlySelect}
              />
              <div className="collection-image-container">
                <h1>Jelery</h1>
              </div>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 collection my-3"
            style={{ height: "25rem" }}
          >
            <Link to="/shop">
              <img
                src={computer}
                alt=""
                className="img-fluid h-100  collection-img"
                onClick={electronicsSelect}
              />
              <div className="collection-image-container">
                <h1>Electronics</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
