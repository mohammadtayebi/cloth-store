import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Single__product from "../Components/Single__product";
import Feature from "../Components/Home/FeatureProducts";
import { useProductContext } from "../contex/product-context";

const SingleProduct = () => {
  const {
    fetchSingleProduct,
    single_products_error,
    single_products_loading,
  } = useProductContext();
  const { id } = useParams();
  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);
  if (single_products_loading) {
    return (
      <div
        className="spinner-border text-warning d-flex m-auto"
        style={{ width: "10rem", height: "10rem" }}
      ></div>
    );
  }
  if (single_products_error) {
    return (
      <div class="alert alert-warning alert-dismissible fade show w-25 m-auto">
        <button type="button" class="close" data-dismiss="alert">
          &times;
        </button>
        <strong>Error!</strong> Products did not load!
      </div>
    );
  }
  return (
    <div>
      <Single__product />
      <Feature />
    </div>
  );
};

export default SingleProduct;
