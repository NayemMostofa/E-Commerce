import Container from '../Common/Container'
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import banner from '../assets/banner.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbCategoryPlus } from "react-icons/tb";
import { useState } from "react"; 

const SliderComponent = Slider.default ?? Slider;

const Banner = () => {
  const [show, setShow] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="relative">
        <ul className="flex justify-center absolute bottom-6 left-1/2 -translate-x-1/2">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-[#808080]"></div>
    ),
  };

  return (
    <div className="py-6">
      <Container>
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <div className="flex justify-between items-center lg:hidden cursor-pointer">
            <h1 className="text-base font-medium">Categories</h1>
            <TbCategoryPlus
              onClick={() => setShow(!show)}
              className="text-2xl my-2"
            />
          </div>

          <div
            className={`${
              show ? "flex" : "hidden"
            } w-full lg:block lg:w-[20%] lg:border-r border-[#00000070] transition-all duration-300 ease-in-out`}
          >
            <ul className="mt-6 lg:mt-10 space-y-3 lg:space-y-4 text-sm lg:text-base">
              <li className="flex justify-between items-center pr-2 w-full cursor-pointer hover:text-red-500">
                <span>Woman’s Fashion</span><IoIosArrowForward />
              </li>
              <li className="flex justify-between items-center pr-2 w-full cursor-pointer hover:text-red-500">
                <span>Men’s Fashion</span><IoIosArrowForward />
              </li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>

          <div className="mt-15 lg:mt-10 w-full lg:w-[80%]">
            <SliderComponent {...settings}>
              {[...Array(5)].map((_, i) => (
      <div key={i}>
        <img className="w-full rounded-md object-cover"src={banner} alt={`Banner ${i + 1}`} />
      </div>
    ))}
  </SliderComponent>
</div>

        </div>
      </Container>
    </div>
  );
};

export default Banner;
