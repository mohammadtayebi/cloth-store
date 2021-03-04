import React from "react";
import { useProductContext } from "../contex/product-context";

const Single__product = () => {
  const { single_products: product } = useProductContext();

  const { category, description, image, id, price, title } = product;
  return (
    <div className="my-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img src={image} alt={title} className="img-fluid w-50" />
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 text-center text-lg-left">
            <h3 style={{ fontWeight: "500" }}>{title}</h3>
            <p className="text-muted mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores
              iusto! Molestiae expedita veritatis nesciunt doloremque sint
              asperiores fuga voluptas, distinctio, aperiam, ratione dolore.
            </p>
            <p className="text-muted">{description}</p>
            <p style={{ fontSize: "1.2rem" }} className="font-weight-bold">
              catogory :
              <span style={{ fontSize: "1rem" }} className="text-primary pl-4">
                {category}
              </span>
            </p>
            <h3 style={{ color: "#7971ea" }}>${price}</h3>
            <div
              className="input-group my-4 mx-auto mx-lg-0"
              style={{ maxWidth: "120px" }}
            >
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary js-btn-minus"
                  type="button"
                >
                  −
                </button>
              </div>
              <input
                type="text"
                className="form-control text-center"
                placeholder="1"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-primary js-btn-plus"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
            <button className="buttons my-3">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single__product;
