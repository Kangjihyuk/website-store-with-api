import React from "react";
import Navlink from "../elements/Navlink/Navlink";

const NavbarLink = (props) => {
    const { classname } = props;
  return (
      <div className={`${classname} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <Navlink link="electronics"/>
        <Navlink link="jewelery"/>
        <Navlink link="men's clothing"/>
        <Navlink link="women's clothing"/>
      </div>
  );
};

export default NavbarLink;
