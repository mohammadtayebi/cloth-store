import React from "react";
import { useFilterContext } from "../../contex/filter_context";

const Filters = () => {
  const {
    updateFilters,
    clearFilter,

    filters: {
      text,
      womanBox,
      manBox,
      jewerlyBox,
      electronicBox,
      min,
      max,
      price,
    },
  } = useFilterContext();

  return (
    <div className="border mt-5">
      <form action="" className="" onSubmit={(e) => e.preventDefault()}>
        {/* search text  */}
        <div className="input-group mb-3 input-group-sm mt-3 px-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <input
            value={text}
            type="text"
            name="text"
            className="form-control"
            placeholder="SEARCH"
            onChange={updateFilters}
          />
        </div>

        <h6 className="my-4 ml-2">Categories :</h6>
        {/* WOman checkbox  */}
        <div className="custom-control custom-checkbox ml-4 my-2 ">
          <input
            type="checkbox"
            className="custom-control-input"
            id="womanBox"
            name="womanBox"
            onChange={updateFilters}
            checked={womanBox}
          />
          <label className="custom-control-label" htmlFor="womanBox">
            Woman
          </label>
        </div>
        {/* Man check Box */}
        <div className="custom-control custom-checkbox ml-4 my-2 ">
          <input
            type="checkbox"
            className="custom-control-input"
            id="manBox"
            name="manBox"
            onChange={updateFilters}
            checked={manBox}
          />
          <label className="custom-control-label" htmlFor="manBox">
            Man
          </label>
        </div>
        {/* jewelry checkbox */}
        <div className="custom-control custom-checkbox ml-4 my-2 ">
          <input
            type="checkbox"
            className="custom-control-input"
            id="jewerlyBox"
            name="jewerlyBox"
            onChange={updateFilters}
            checked={jewerlyBox}
          />
          <label className="custom-control-label" htmlFor="jewerlyBox">
            Jewerly
          </label>
        </div>
        {/* ?electronics */}
        <div className="custom-control custom-checkbox ml-4 mb-5">
          <input
            type="checkbox"
            className="custom-control-input"
            id="electronicsBox"
            name="electronicBox"
            onChange={updateFilters}
            checked={electronicBox}
          />
          <label className="custom-control-label" htmlFor="electronicsBox">
            Electronics
          </label>
        </div>
        {/* Range Price  */}
        <label htmlFor="price" className="ml-2">
          Price:
        </label>
        <input
          type="range"
          className="custom-range my-3 px-3"
          id="price"
          name="price"
          value={price}
          max={max}
          min={min}
          onChange={updateFilters}
        />
        <p className="ml-4">${price}</p>
      </form>
      <button
        className="alert alert-danger text-center mx-auto d-flex my-4"
        onClick={clearFilter}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
