import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/product_reducer";
import {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCTS,
  PRODUCTS_LOADING,
  PRODUCTS_ERROR,
  SINGLE_PRODUCTS_LOADING,
  SINGLE_PRODUCTS_ERROR,
} from "../action";

const initialState = {
  products: [],
  products_loading: false,
  products_error: false,
  single_products: [],
  single_products_loading: false,
  single_products_error: false,
};

const ProductContext = React.createContext();
const ProductProvider = ({ children }) => {
  const url = "https://fakestoreapi.com/products";
  const [state, dispatch] = useReducer(reducer, initialState);
  // getting all the products
  const fetchProducts = async () => {
    dispatch({ type: PRODUCTS_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: GET_ALL_PRODUCTS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: PRODUCTS_ERROR });
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // getting a single product
  const fetchSingleProduct = async (id) => {
    dispatch({ type: SINGLE_PRODUCTS_LOADING });
    try {
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();
      dispatch({ type: GET_SINGLE_PRODUCTS, payload: data });
    } catch (error) {
      dispatch({ type: SINGLE_PRODUCTS_ERROR });
    }
  };
  return (
    <ProductContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = () => {
  return useContext(ProductContext);
};
export { ProductContext, ProductProvider };
