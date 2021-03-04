import React, { useEffect, useReducer, useContext, useState } from "react";
import reducer from "../reducer/filter_reducer";
import {
  GET_ALL_FILTER_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT_VALUE,
  FILTER_PRODUCTS,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  MEN_CHANGE,
  WOMAN_CHANGE,
  JEWELRY_CHANGE,
  ELECTRONICS_CHANGE,
  FILTER_LOADING,
  FILTER_ERROR,
} from "../action";

const initialState = {
  filter_loading: false,
  filter_error: false,
  products: [],
  filterProducts: [],
  sort: "Sort",
  filters: {
    text: "",
    womanBox: false,
    manBox: false,
    jewerlyBox: false,
    electronicBox: false,
    min: 0,
    max: 0,
    price: 0,
  },
};
const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://fakestoreapi.com/products";
  // Sort
  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort]);
  // Filter
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);
  // fetch Data
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    dispatch({ type: FILTER_LOADING });
    try {
      const data = await fetch(url);
      const response = await data.json();
      dispatch({ type: GET_ALL_FILTER_PRODUCTS, payload: response });
    } catch (error) {
      dispatch({ type: FILTER_ERROR });
      console.log(error);
    }
  };

  // here we get the value out of options
  const getSortValue = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT_VALUE, payload: value });
  };
  // Filtering the items
  const updateFilters = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    if (name === "womanBox") {
      value = e.target.checked;
    }
    if (name === "manBox") {
      value = e.target.checked;
    }
    if (name === "jewerlyBox") {
      value = e.target.checked;
    }
    if (name === "electronicBox") {
      value = e.target.checked;
    }
    if (name === "price") {
      value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  // clearing the filters
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  // getting special category
  const menSelect = () => {
    dispatch({ type: MEN_CHANGE });
  };
  const womanSelect = () => {
    dispatch({ type: WOMAN_CHANGE });
  };
  const jewerlySelect = () => {
    dispatch({ type: JEWELRY_CHANGE });
  };
  const electronicsSelect = () => {
    dispatch({ type: ELECTRONICS_CHANGE });
  };
  useEffect(() => {
    clearFilter();
  }, []);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        getSortValue,
        updateFilters,
        clearFilter,
        menSelect,
        womanSelect,
        jewerlySelect,
        electronicsSelect,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider };
