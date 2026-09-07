import Card from '../Common/Card.jsx'
import Container from '../Common/Container.jsx'
import CountDown from '../Common/CountDown.jsx'
import SecHead from '../Home/SecHead.jsx'
import img from '../assets/Frame 611 (1).png'
import img1 from '../assets/ak-900-01-500x500 1.png'
import img2 from '../assets/Frame 613.png'
import img3 from '../assets/Frame 614.png'
import Slider from "react-slick";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Btn from "../Common/Btn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = Slider.default ?? Slider;

function SampleNextArrow({ onClick, className, style }) {
  return (
    <button type="button" onClick={onClick} className="hidden cursor-pointer absolute -top-21.5 right-0 z-10 w-11 h-11 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center  " >
    
      <FaArrowRight size={18} color="#000000" />
    </button>
  );
}

function SamplePrevArrow({ onClick, className, style }) {
  return (
    <button type="button" onClick={onClick} className="hidden  cursor-pointer z-10 absolute -top-21.5 right-13  w-11 h-11 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center  "
    >
      <FaArrowLeftLong size={18} color="#000000" />
    </button>
  );
}

const FlashSales = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    rows: 1,
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
    <div className="pt-10 lg:pt-37.5 pb-20 bg-white">
      <Container className="w-full min-w-0">
       <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-22">
        <SecHead title="Today’s" heading="Flash Sales" />
        <CountDown />
      </div>

        <div className="my-10 w-full min-w-0">
          <SliderComponent className="w-full min-w-0" {...settings}>
            <Card
              image={img}
              dispercent="40"
              title="HAVIT HV-G92 Gamepad"
              disprice="140"
              price="160"
              rating="2.5"
              review="88"
            />
            <Card
              image={img1}
              dispercent="39"
              title="AK-900 Wired Keyboard"
              disprice="960"
              price="1160"
              rating="2.5"
              review="75"
            />
            <Card
              image={img2}
              dispercent="30"
              title="IPS LCD Gaming Monitor"
              disprice="370"
              price="400"
              rating="2.5"
              review="99"
            />
            <Card
              image={img3}
              dispercent="25"
              title="S-Series Comfort Chair"
              disprice="375"
              price="400"
              rating="2.5"
              review="99"
            />
            <Card
              image={img}
              dispercent="40"
              title="HAVIT HV-G92 Gamepad"
              disprice="140"
              price="160"
              rating="2.5"
              review="88"
            />
            <Card
              image={img1}
              dispercent="39"
              title="AK-900 Wired Keyboard"
              disprice="960"
              price="1160"
              rating="2.5"
              review="75"
            />
            <Card
              image={img2}
              dispercent="30"
              title="IPS LCD Gaming Monitor"
              disprice="370"
              price="400"
              rating="2.5"
              review="99"
            />
            <Card
              image={img3}
              dispercent="25"
              title="S-Series Comfort Chair"
              disprice="375"
              price="400"
              rating="2.5"
              review="99"
            />
          </SliderComponent>
        </div>
         <div className=" text-center pb-18 border-b-[0.5px] border-[#00000061] ">
          <Btn> View All Products</Btn>
        </div>

      </Container>
    </div>
  );
};

export default FlashSales;
