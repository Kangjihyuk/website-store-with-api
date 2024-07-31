import React from "react";
import { Link } from "react-router-dom";

const Navlink = (props) => {
  const { link, links } = props;
  return (
    <ul className="flex flex-col w-screen items-center md:-translate-x-1/4 md:w-1/2">
      <li className="btn text-gray-300 font-extrabold text-lg uppercase relative border-none bg-none transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] focus:text-white hover:text-white">
        <Link
          to={links}
          className="poppins-semibold text-white md:text-black md:text-nowrap"
        >
          {link}
        </Link>
      </li>
    </ul>
  );
};

export default Navlink;
