import React from "react";
import Navlink from "../elements/Navlink/Navlink";

const NavbarLink = (props) => {
  const { classname } = props;
  return (
    <div
      className={`${classname} absolute top-[9.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-500 px-10 py-5 gap-3 flex flex-col md:static md:translate-x-0 md:translate-y-0 md:bg-transparent md:grid md:grid-cols-4 md:px-0 md:py-0 md:top-0 z-10`}
    >
      <Navlink link="electronics" links="/electronics" />
      <Navlink link="jawalery" links="/jawalery" />
      <Navlink link="men's" links="/mens clothing" />
      <Navlink link="women's" links="/women clothing" />
    </div>
  );
};

export default NavbarLink;
