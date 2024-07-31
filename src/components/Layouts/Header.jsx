import React, { Fragment } from "react";
import Banner from "../Fragments/Banner";
import Image from "../../../pictures/sale-removebg-preview.png";
import Women from "../../../pictures/shoping-removebg-preview.png";
import Shopping from "../../../pictures/shoping2-removebg-preview.png";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    title: "Upto 70% off on all Product sale",
    image: Image,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi, cupiditate illo accusamus enim dolor reprehenderit eveniet ab quia facilis culpa possimus eos praesentium! Odio magnam maxime ea commodi ipsam",
  },
  {
    id: 2,
    image: Women,
    title: "Upto 50% off on all Women's Wear",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi, cupiditate illo accusamus enim dolor reprehenderit eveniet ab quia facilis culpa possimus eos praesentium! Odio magnam maxime ea commodi ipsam",
  },
  {
    id: 3,
    image: Shopping,
    title: "Upto 50% off on all Product sale",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi, cupiditate illo accusamus enim dolor reprehenderit eveniet ab quia facilis culpa possimus eos praesentium! Odio magnam maxime ea commodi ipsam",
  },
];

const Header = (props) => {
  const { settings2 } = props;
  return (
    <Fragment>
      <Slider {...settings2} className="overflow-x-hidden">
        {ImageList.map((banner) => (
          <Banner key={banner.id}>
            <Banner.Text name={banner.title}>{banner.descriptions}</Banner.Text>
            <Banner.ImagePage image={banner.image} />
          </Banner>
        ))}
      </Slider>
    </Fragment>
  );
};

export default Header;
