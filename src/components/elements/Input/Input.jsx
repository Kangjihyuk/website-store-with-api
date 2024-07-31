import React from "react";

const Input = (props) => {
  const { handleSearch } = props;
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="search bg-blue-500 placeholder:text-white py-2 px-4 rounded-lg focus:outline-none placeholder:text-center placeholder:text-lg focus:ring ring-teal-300 sm:py-3 sm:px-8 md:px-10 lg:px-12 w-[70%]"
        onChange={handleSearch}
      />
    </>
  );
};

export default Input;
