import React from "react";
import { Link } from "react-router-dom";

import { useFilterContext } from "../../contex/filter_context";

const Products = () => {
  const { filterProducts, filter_loading, filter_error } = useFilterContext();
  if (filter_loading) {
    return (
      <div
        className="spinner-border text-warning d-flex m-auto"
        style={{ width: "10rem", height: "10rem" }}
      ></div>
    );
  }
  if (filter_error) {
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
    <div className="my-5 py-5">
      <div className="row">
        {/* one product start from here */}

        {filterProducts.map((product) => {
          const { id, title, price, category, image } = product;
          return (
            <div className="col-lg-4 col-md-6 mb-4" key={id}>
              <div
                className="text-center border block-4 h-100 d-flex justify-content-around flex-column align-items-center"
                style={{ boxShadow: "0 0 30px -10px rgba(0, 0, 0, 0.1)" }}
              >
                <img src={image} alt={title} className="w-50 mt-4" />
                <div className="my-5 text-center">
                  <Link
                    to={`/products/${id}`}
                    className=" btn"
                    style={{ color: "#3a2ee0", fontSize: "1.2rem" }}
                  >
                    {title.slice(0, 39)}
                  </Link>
                  <p className="text-muted">{category}</p>
                  <p style={{ color: "#7971ea" }}>${price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
