import React, { useState } from "react";
import Bottomnav from "./Bottomnav";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";

const Navbar = () => {
  const [Nav, setNav] = useState(true);
  //   this is for opening the responsive navbar
  const sideNav = () => {
    setNav(!Nav);
  };
  //   this for closing the responsive navbar
  const closeNavbar = () => {
    setNav(true);
  };
  return (
    <nav style={{ height: "100%" }}>
      <Topnav sideNav={sideNav} />
      <hr />
      {Nav ? <Bottomnav /> : <Sidenav closeNavbar={closeNavbar} />}
    </nav>
  );
};

export default Navbar;
