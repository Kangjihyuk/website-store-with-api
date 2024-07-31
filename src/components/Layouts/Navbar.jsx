import React from "react";
import Logo from "../elements/Logo/Logo";
import Hamburger from "../elements/Hamburger/Hamburger";
import Search from "../elements/search/Search";
import NavbarLink from "../Fragments/NavbarLink";
import Basket from "../elements/basket/Basket";

const Navbar = ({ count, handlePopUp }) => {
  return (
    <div className="items-center flex justify-between bg-slate-100 w-screen p-2">
      <Logo logo="Collective" />
      <div className="flex items-center gap-2.5">
        <NavbarLink classname={"hidden"} />
        <Basket count={count} handlePopUp={() => handlePopUp()} />
        <Search />
        <Hamburger />
      </div>
    </div>
  );
};

export default Navbar;
