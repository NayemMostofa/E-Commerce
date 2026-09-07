import React, { Component } from "react";
import Container from "../Common/Container";
import SecHead from "./SecHead";
import CategoryCard from "../Common/CategoryCard";
import { CiCamera } from "react-icons/ci";
import Slider from "react-slick";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { GiSmartphone } from "react-icons/gi";
import { LuMonitorSmartphone } from "react-icons/lu";
import { MdOutlineWatch } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineVideogameAsset } from "react-icons/md";

function SampleNextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="hidden cursor-pointer absolute -top-21.5 right-0 z-10 w-11 h-11 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center  "
    >
      <FaArrowRight />
    </button>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="hidden cursor-pointer  z-10 absolute -top-21.5 right-13  w-11 h-11 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center  "
    >
      <FaArrowLeftLong />
    </button>
  );
}

const SliderComponent = Slider?.default ?? Slider;

const Category = () => {
  const settings = {
        infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Container>
        <SecHead title="Categories" heading="Browse By Category" />

        <div className=" w-full category  py-15 border-b border-[#00000067] ">
          <SliderComponent className="w-full  h-full " {...settings}>
            <div>
              <CategoryCard text={<GiSmartphone />} name="Phone" />
            </div>
            <div>
              <CategoryCard text={<LuMonitorSmartphone />} name="Cumputer" />
            </div>
            <div>
              <CategoryCard text={<MdOutlineWatch />} name="SmartWatch" />
            </div>
            <div>
              <CategoryCard text={<CiCamera />} name="Camera" />
            </div>
            <div>
              <CategoryCard text={<FaHeadphonesAlt />} name="HeadPhones" />
            </div>
            <div>
              <CategoryCard text={<MdOutlineVideogameAsset />} name="Gaming" />
            </div>
            <div>
              <CategoryCard text={<FaHeadphonesAlt />} name="HeadPhones" />
            </div>
            <div>
              <CategoryCard text={<MdOutlineVideogameAsset />} name="Gaming" />
            </div>
          </SliderComponent>
        </div>
      </Container>
    </div>
  );
};

export default Category;