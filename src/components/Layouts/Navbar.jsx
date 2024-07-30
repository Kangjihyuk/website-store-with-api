import React, { useState } from "react";
import Logo from "../elements/Logo/Logo";
import Hamburger from "../elements/Hamburger/Hamburger";

const Navbar = () => {
  return (
    <div className="container items-center flex justify-between bg-slate-500">
      <Logo logo="Collective" />
      <Hamburger />
    </div>
  );
};

export default Navbar;
