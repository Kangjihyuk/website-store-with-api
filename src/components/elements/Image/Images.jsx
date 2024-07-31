import React from "react";

const Images = (props) => {
  const { post, alt } = props;
  return (
    <>
      <img src={post} alt={alt} />
    </>
  );
};

export default Images;
