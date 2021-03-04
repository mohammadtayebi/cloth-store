import React from "react";
import { useFilterContext } from "../../contex/filter_context";

const Sort = () => {
  const { getSortValue, sort } = useFilterContext();
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h5>Shop All</h5>
      <div>
        <form action="">
          <select
            name="sort"
            id="sort"
            className="custom-select"
            onChange={getSortValue}
            value={sort}
          >
            <option value="dafault">Sort</option>
            <option value="name-a">Name,A to Z</option>
            <option value="name-z">Name,Z to A</option>
            <option value="price-high">Price,low to high</option>
            <option value="price-lowe">Price,high to low</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
