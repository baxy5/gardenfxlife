import React from "react";

import Logo from "./Navbar/Logo";
import Nav from "./Navbar/Nav";

const Navbar = () => {
  return (
    <div className="bg-[#121212] py-8">
      <Logo />
      <Nav />
    </div>
  );
};

export default Navbar;
