import { useState } from "react";
import NavbarLink from "../../Fragments/NavbarLink";

const Hamburger = () => {
  const [clickNav, setClickNav] = useState(true);
  const handleClickNav = () => {
    setClickNav(!clickNav);
  };

  return (
    <div className="md:hidden">
      <label>
        <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
          <input
            className="hidden peer"
            type="checkbox"
            onClick={handleClickNav}
          />
          <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
          <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
          <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
        </div>
      </label>
      <NavbarLink classname={clickNav ? "hidden" : "block"} />
    </div>
  );
};

export default Hamburger;
