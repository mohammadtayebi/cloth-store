import React from "react";
import Sort from "../Components/Shop/Sort";
import Filters from "../Components/Shop/Filters";
import Products from "../Components/Shop/Products";

const Shop = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            {/* filters  */}
            <Filters />
          </div>
          <div className="col-lg-9">
            {/* sort  */}
            <Sort />
            {/* products  */}
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
