import React from "react";
import sale from "../../utils/sale.jpg";

const BigSale = () => {
  return (
    <div>
      <div className="my-5">
        <h3 className="text-center">Big Sale</h3>
        <hr className="w-25 bg-danger mb-5" />
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-lg-6 ">
              <img src={sale} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 my-auto text-center ">
              <h2 className="text-primary">50% sale in all times</h2>
              <p className="text-center text-muted my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Quisquam iste dolor accusantium facere corporis ipsum animi
                <br /> deleniti fugiat. Ex, veniam?
              </p>
              <button className="buttons">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSale;
