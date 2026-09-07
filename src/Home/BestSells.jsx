import React from "react";
import Container from "../Common/Container";
import SecHead from "./SecHead";
import Btn from "../Common/Btn";
import img from "../assets/Frame 605.png";
import Card from "../Common/Card";
import img1 from "../assets/Frame 606.png";
import box from "../assets/Frame 610.png";
import table from "../assets/Frame 612.png";
import Slider from "react-slick";

const SliderComponent = Slider?.default ?? Slider;
function SampleNextArrow() {
  return (
    <div/>
  );
}

function SamplePrevArrow() {
  return (
    <div />
  );
}

const BestSells = () => {
  const settings = {
    dots: true,
    infinite: true,
      slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <di></di>,
  };

  return (
    <div className="pt-17.5 pb-35 bg-white">
      <Container>
        <div className=" flex lg:flex-row flex-col gap-y-10 justify-between lg:items-end ">
          <SecHead title="This Month " heading="  Best Selling Products" />
          <Btn> View All</Btn>
        </div>

        <div className="mt-15">
          <div className="flex flex-wrap justify-center gap-y-10 lg:justify-between">
           
                  <Card
                  AddToCardCss="hidden"
                  disCountCss="hidden"
                  image={img}
                  title="The north coat"
                  disprice="260"
                  price="360"
                  rating={5}
                  review="65"
                />
              
                  <Card
                  AddToCardCss="hidden"
                  disCountCss="hidden"
                  image={img1}
                  title="Gucci duffle bag"
                  disprice="960"
                  price="1160"
                  rating={4.4}
                  review="65"
                />
          
                 <Card
                  AddToCardCss="hidden"
                  disCountCss="hidden"
                  image={box}
                  title="RGB liquid CPU Cooler"
                  disprice="160"
                  price="170"
                  rating={3.4}
                  review="65"
                />            
            
                <Card
                  AddToCardCss="hidden"
                  disCountCss="hidden"
                  image={table}
                  title="Small BookSelf"
                  disprice="360"
                  price="160"
                  rating={2.6}
                  review="65"
                />                  
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestSells;