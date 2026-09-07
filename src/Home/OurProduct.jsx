import React from "react";
import Slider from "react-slick";
import Container from "../Common/Container";
import SecHead from "./SecHead";
import Card from "../Common/Card";
import img1 from "../assets/Frame 604.png";
import camera from "../assets/Frame 604 (1).png";
import laptop from "../assets/Frame 604 (2).png";
import car from "../assets/Frame 608.png";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = Slider?.default ?? Slider;

function SampleNextArrow({ onClick }) {
  return (
    <button
      className="hidden cursor-pointer w-11 h-11 absolute -top-20 right-0 rounded-full bg-[#F5F5F5] lg:flex justify-center items-center"
      onClick={onClick}
    >
      <FaArrowRightLong />
    </button>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <button
      className="hidden cursor-pointer w-11 h-11 absolute -top-20 right-14 rounded-full bg-[#F5F5F5] lg:flex justify-center items-center"
      onClick={onClick}
    >
      <FaArrowLeftLong />
    </button>
  );
}

const OurProduct = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // default desktop
    slidesToScroll: 1,
    rows: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // large screen
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-16 pb-12 bg-white">
      <Container>
        <SecHead title="Our Products" heading="Explore Our Products" />
        <div className="mt-10">
          <SliderComponent className="w-full" {...settings}>
            <Card image={img1} title="Breed Dry Dog Food" currentPrice="100" rating={3} review="35" />
            <Card image={camera} title="CANON EOS DSLR Camera" currentPrice="360" rating={4} review="95" />
            <Card image={laptop} title="ASUS FHD Gaming Laptop" currentPrice="700" rating={5} review="325" />
            <Card image={car} title="Kids Electric Car" currentPrice="960" rating={3.8} review="65" />
            <Card image={img1} title="Breed Dry Dog Food" currentPrice="100" rating={3} review="35" />
            <Card image={camera} title="CANON EOS DSLR Camera" currentPrice="360" rating={4} review="95" />
            <Card image={laptop} title="ASUS FHD Gaming Laptop" currentPrice="700" rating={5} review="325" />
            <Card image={car} title="Kids Electric Car" currentPrice="960" rating={3.8} review="65" />
          </SliderComponent>
        </div>
      </Container>
    </div>
  );
};

export default OurProduct;
