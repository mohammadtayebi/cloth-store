import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./contex/product-context";
import { FilterProvider } from "./contex/filter_context";

ReactDOM.render(
  <ProductProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductProvider>,
  document.getElementById("root")
);
