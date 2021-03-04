import React from "react";
import HowStarted from "../Components/About/HowStarted";
import TheTeam from "../Components/About/TheTeam";
import Delivery from "../Components/Home/DeliveryInfo";
const About = () => {
  return (
    <div>
      <HowStarted />
      <hr />
      <TheTeam />
      <hr />
      <Delivery />
    </div>
  );
};

export default About;
