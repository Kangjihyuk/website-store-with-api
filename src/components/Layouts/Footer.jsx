import { Fragment } from "react";

export const Footer = () => {
  return (
    <Fragment>
      <div className="flex justify-center gap-4 mt-10 mb-10">
        <h1 className="poppins-medium underline text-blue-500 md:text-xl cursor-pointer">
          Powered by Blogger
        </h1>
        <h2 className="md:text-xl">&copy; 2024 | All Rights Reserved</h2>
      </div>
    </Fragment>
  );
};
