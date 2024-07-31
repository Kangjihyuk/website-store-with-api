import { Fragment } from "react";

const Icon = (props) => {
  const { icon } = props;
  return (
    <Fragment>
      <i className="text-lg md:text-xl hover:text-blue-400 hover:scale-105">
        {icon}
      </i>
    </Fragment>
  );
};

export default Icon;
