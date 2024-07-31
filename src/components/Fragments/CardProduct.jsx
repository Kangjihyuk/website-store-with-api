import React, { Fragment } from "react";

const CardProduct = ({ children }) => {
  return (
    <Fragment>
      <div className="container flex justify-center items-center">
        <div className="relative flex w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-20">
          <div className="p-6 pt-0">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export const CardImages = (props) => {
  const { image, title } = props;
  return (
    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
      <img src={image} alt={title} className="size-full" />
    </div>
  );
};

export const CardText = (props) => {
  const { title, children, price, count, rate } = props;
  return (
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-lg poppins-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {title}
      </h5>
      <p className="block font-sans text-base text-justify poppins-light leading-relaxed text-inherit antialiased">
        {children}
      </p>
      <p className="block font-sans mt-3 poppins-bold text-lg leading-relaxed text-inherit antialiased">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </p>
      <p className="block font-sans text-base text-justify poppins-light leading-relaxed text-inherit antialiased mt-2 poppins-semibold">
        rate {rate} / {count}
      </p>
    </div>
  );
};

CardProduct.CardImages = CardImages;
CardProduct.CardText = CardText;
export default CardProduct;
