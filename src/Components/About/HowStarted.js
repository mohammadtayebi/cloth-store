import React from "react";
import sale from "../../utils/sale.jpg";

const HowStarted = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={sale} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h1 className="mb-4">How We Started</h1>
            <p className="text-muted text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              repellat, dicta at laboriosam, nemo exercitationem itaque eveniet
              architecto cumque, deleniti commodi molestias repellendus quos
              sequi hic fugiat asperiores illum. Atque, in, fuga excepturi
              corrupti error corporis aliquam unde nostrum quas.
            </p>
            <p className="text-muted text-justify">
              Accusantium dolor ratione maiores est deleniti nihil? Dignissimos
              est, sunt nulla illum autem in, quibusdam cumque recusandae,
              laudantium minima repellendus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowStarted;
