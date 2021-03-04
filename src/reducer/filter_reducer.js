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

const filter_reducer = (state, action) => {
  if (action.type === FILTER_LOADING) {
    return { ...state, filter_loading: true, filter_error: false };
  }
  if (action.type === GET_ALL_FILTER_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      filter_loading: false,
      filter_error: false,
      products: action.payload,
      filterProducts: action.payload,
      filters: { ...state.filters, max: maxPrice, price: maxPrice },
    };
  }
  if (action.type === FILTER_ERROR) {
    return { ...state, filter_error: true, filter_loading: false };
  }
  if (action.type === UPDATE_SORT_VALUE) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filterProducts } = state;
    let filter = [...filterProducts];
    if (sort === "price-high") {
      filter = filter.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-lowe") {
      filter = filter.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      filter = filter.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    if (sort === "name-z") {
      filter = filter.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }
    if (sort === "default") {
      filter = [...filterProducts];
    }
    return { ...state, filterProducts: filter };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { products } = state;
    let tempProducts = [...products];
    const {
      text,
      womanBox,
      manBox,
      jewerlyBox,
      electronicBox,
      price,
    } = state.filters;
    if (text) {
      tempProducts = tempProducts.filter((p) => {
        return p.title.toLowerCase().startsWith(text);
      });
    }
    if (womanBox) {
      tempProducts = tempProducts.filter(
        (p) => p.category === "women clothing"
      );
    }
    if (manBox) {
      tempProducts = tempProducts.filter((p) => p.category === "men clothing");
    }
    if (jewerlyBox) {
      tempProducts = tempProducts.filter((p) => p.category === "jewelery");
    }
    tempProducts = tempProducts.filter((p) => p.price <= price);
    if (electronicBox) {
      tempProducts = tempProducts.filter((p) => p.category === "electronics");
    }

    return { ...state, filterProducts: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        womanBox: false,
        manBox: false,
        jewerlyBox: false,
        electronicBox: false,
        price: state.filters.max,
      },
    };
  }
  if (action.type === MEN_CHANGE) {
    return { ...state, filters: { ...state.filters, manBox: true } };
  }
  if (action.type === WOMAN_CHANGE) {
    return { ...state, filters: { ...state.filters, womanBox: true } };
  }
  if (action.type === JEWELRY_CHANGE) {
    return { ...state, filters: { ...state.filters, jewerlyBox: true } };
  }
  if (action.type === ELECTRONICS_CHANGE) {
    return { ...state, filters: { ...state.filters, electronicBox: true } };
  }
};
export default filter_reducer;
