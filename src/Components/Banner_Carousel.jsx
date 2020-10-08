import React from "react";
import "./Banner_Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import banner from "../imagesBanner/banner1.jpg";
import banner1 from "../imagesBanner/banner2.jpg";
import banner2 from "../imagesBanner/Banner3.jpg";
const carousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={banner} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
export default carousel;
