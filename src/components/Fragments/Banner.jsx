import React, { Fragment } from "react";
import Button from "../elements/button/Button";
const Banner = ({ children }) => {
  return (
    <Fragment>
      <div className="container flex items-center justify-center flex-col mt-2 md:flex-row md:h-screen md:gap-10">
        {children}
      </div>
    </Fragment>
  );
};

const Text = (props) => {
  const { name, children } = props;
  return (
    <div className="md:w-1/2">
      <h1 className="poppins-bold text-lg md:text-2xl lg:text-3xl xl:text-5xl">
        {name}
      </h1>
      <p className="poppins-light mt-2 text-justify md:mt-4 md:text-md lg:text-lg xl:text-xl">
        {children}
      </p>
      <Button name="Shop Now ->" classname="mt-4 md:mt-5" />
    </div>
  );
};

const ImagePage = (props) => {
  const { image } = props;
  return (
    <div className="md:w-1/2 mt-6 md:mt-0">
      <img src={image} alt="foto" className="md:w-[90%]" loading="lazy" />
    </div>
  );
};
Banner.Text = Text;
Banner.ImagePage = ImagePage;
export default Banner;
