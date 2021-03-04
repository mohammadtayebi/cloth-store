import React from "react";
import BigSale from "../Components/Home/BigSale";
import Collection from "../Components/Home/Collection";
import DeliveryInfo from "../Components/Home/DeliveryInfo";
import FeatureProducts from "../Components/Home/FeatureProducts";
import Intro from "../Components/Home/Intro";

const Home = () => {
  return (
    <div>
      <Intro />
      <DeliveryInfo />
      <Collection />
      <FeatureProducts />
      <BigSale />
    </div>
  );
};

export default Home;
