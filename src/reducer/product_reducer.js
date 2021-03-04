import {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCTS,
  PRODUCTS_LOADING,
  PRODUCTS_ERROR,
  SINGLE_PRODUCTS_LOADING,
  SINGLE_PRODUCTS_ERROR,
} from "../action";

const product_reducer = (state, action) => {
  if (action.type === PRODUCTS_LOADING) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_ALL_PRODUCTS) {
    return {
      ...state,
      products_loading: false,
      products: action.payload,
    };
  }
  if (action.type === PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }
  if (action.type === SINGLE_PRODUCTS_LOADING) {
    return { ...state, single_products_loading: true };
  }
  if (action.type === GET_SINGLE_PRODUCTS) {
    return {
      ...state,
      single_products: action.payload,
      single_products_loading: false,
      single_products_error: false,
    };
  }
  if (action.type === SINGLE_PRODUCTS_ERROR) {
    return {
      ...state,
      single_products_loading: false,
      single_products_error: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default product_reducer;
