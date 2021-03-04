import React from "react";
import "./DeliveryInfo.css";

const DeliveryInfo = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 d-lg-flex">
            <i className="delivery-icons mx-lg-3 my-3 fas fa-truck"></i>
            <div>
              <h5>FREE SHIPPING</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 d-lg-flex">
            <i className="delivery-icons mx-lg-3 my-3 fas fa-redo-alt"></i>
            <div>
              <h5>FREE RETURNS</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 d-lg-flex">
            <i className="delivery-icons mx-lg-3 my-3 fas fa-question-circle"></i>
            <div>
              <h5>CUSTOMER SUPPORT</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
