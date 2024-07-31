import React, { Fragment } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <Fragment>
      <Link to="/search" className="bg-blue-500 p-3 text-white rounded-full">
        <IoSearch />
      </Link>
    </Fragment>
  );
};

export default Search;
