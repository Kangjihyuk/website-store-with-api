import React from "react";
import { Link } from "react-router-dom";

const Navlink = (props) => {
  const {link} = props
  return (
    <ul>
      <li><Link to="#">{ link }</Link></li>
    </ul>
  );
};

export default Navlink;
