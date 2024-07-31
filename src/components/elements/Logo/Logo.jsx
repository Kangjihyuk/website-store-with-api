import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  const { logo } = props;
  return (
    <Link to="/pages" className="poppins-semibold">
      {logo}
    </Link>
  );
};

export default Logo;
