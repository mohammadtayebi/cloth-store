import React from "react";
import { Link } from "react-router-dom";

import { useProductContext } from "../../contex/product-context";

const FeatureProducts = () => {
  const { products, products_loading, products_error } = useProductContext();
  if (products_loading) {
    return (
      <div
        className="spinner-border text-warning d-flex m-auto"
        style={{ width: "10rem", height: "10rem" }}
      ></div>
    );
  }
  if (products_error) {
    return (
      <div class="alert alert-warning alert-dismissible fade show w-25 m-auto">
        <button type="button" class="close" data-dismiss="alert">
          &times;
        </button>
        <strong>Error!</strong> Products did not load!
      </div>
    );
  }
  return (
    <div className="bg-light my-5">
      <h3 className="text-center pt-5 ">Featured Products</h3>
      <hr className="w-25 bg-danger mb-5 " />
      <div className="container">
        <div className="row justify-content-center">
          {/* every time the user refresh the page we show 3 random products  */}
          {products
            .sort(function (a, b) {
              return 0.5 - Math.random();
            })
            .slice(0, 3)
            .map((item) => {
              const { image, id, price, title } = item;
              return (
                <div
                  key={id}
                  className="col-lg-3 col-md-5 bg-white mx-4 mb-5 "
                  style={{
                    boxShadow: "0 0 30px -10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "0.6rem",
                  }}
                >
                  <img
                    style={{ height: "17rem" }}
                    src={image}
                    alt={title}
                    className="w-100"
                  />
                  <hr />
                  <div className="text-center bg-white mt-5">
                    <Link
                      to={`/products/${id}`}
                      className=" btn"
                      style={{ fontSize: "1.2rem", color: "#7971ea" }}
                    >
                      {title}
                    </Link>
                    <p className="text-muted">finding perfect product</p>
                    <p className="text-warning">{price}$</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
