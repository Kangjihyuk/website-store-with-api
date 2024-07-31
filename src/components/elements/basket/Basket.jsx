import React from "react";
import { SlBasket } from "react-icons/sl";
const Basket = (props) => {
  let { count, handlePopUp } = props;
  return (
    <div className="cursor-pointer relative bg-blue-400 p-2 rounded-full">
      <i className="text-xl">
        {" "}
        <SlBasket onClick={handlePopUp} />
      </i>
      <i className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
        {count}
      </i>
    </div>
  );
};

export default Basket;
