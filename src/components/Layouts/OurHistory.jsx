import React, { Fragment } from "react";
import Slider from "react-slick";
import Images from "../elements/Image/Images";
import Beach from "../../../images/beach.jpg";
import Japan from "../../../images/japan.jpg";
import Japan2 from "../../../images/japan2.jpg";
import Sahara from "../../../images/sahara.jpg";
import Mountain from "../../../images/mountain.jpg";
import Women from "../../../images/women.jpg";
import History from "../Fragments/History";
import Icon from "../elements/Icon/Icon";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const OurHistory = (props) => {
  const { settings } = props;
  return (
    <Fragment>
      <div className="container mt-10 sm:mt-14 md:mt-16 lg:mt-20 mb-50 bg-slate-100 py-5 rounded-lg shadow-lg overflow-x-hidden ">
        <History title="Our History" textHistory="Continue reading">
          Our philosophy is built into every piece we make. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </History>
        <Slider {...settings} className="flex mt-10 gap-4">
          <Images post={Beach} alt="beach" />
          <Images post={Japan} alt="japan" />
          <Images post={Japan2} alt="tokyo" />
          <Images post={Mountain} alt="mountain" />
          <Images post={Women} alt="women" />
          <Images post={Sahara} alt="desert" />
        </Slider>
        <div className="flex justify-center gap-5 mt-5 md:mt-10">
          <Icon icon={<FaFacebookF />} />
          <Icon icon={<FaInstagram />} />
          <Icon icon={<FaTwitter />} />
        </div>
      </div>
    </Fragment>
  );
};

export default OurHistory;
