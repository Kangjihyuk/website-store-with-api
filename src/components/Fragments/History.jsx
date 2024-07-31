import React from "react";

const History = (props) => {
  const { title, textHistory, children } = props;
  return (
    <div className="text-center">
      <h1 className="poppins-bold text-lg tracking-wide sm:text-xl md:text-2xl lg:text-3xl">
        {title}
      </h1>
      <p className="text-sm poppins-light mt-2 sm:text-md md:text-lg lg:text-2xl md:mt-4">
        {children}
      </p>
      <p className="text-md mt-2 text-blue-500 underline sm:text-lg md:text-xl lg:text-2xl md:mt-4 cursor-pointer">
        {textHistory} {">"}
      </p>
    </div>
  );
};

export default History;
