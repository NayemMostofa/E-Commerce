import { NavLink } from "react-router";
import Container from "./Container";

const Header = () => {
  return (
    <div className=" py-3.75 bg-black text-white font-Poppins ">
      <Container>
        <div className=" flex justify-between items-center text-[14px]! ">
            <div>
            </div>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <NavLink to="/Shop" className=" underline ml-3 font-semibold  " >ShopNow</NavLink>
          </p>
          <div>
            <select className=" bg-black text-sm" name="" id="">
              <option value="">English</option>
              <option value="">Bangla</option>
              <option value="">Japan</option>
            </select>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;