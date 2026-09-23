import Container from './Container'
import logo from '../assets/Exclusive.png'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Navber = () => {
  const [show, setShow] = useState(false);
  const data = useSelector((state)=>state.AllProducts.cart )
  let navigate = useNavigate()

  return (
    <div className="py-4 border-b">
      <Container>
        <div className="flex justify-between items-center">
       
          <div>
            <img src={logo} alt="Exclusive Logo" className="w-32" />
          </div>

          <div className={`${show ? "flex" : "hidden"} absolute top-16 left-0 w-[70%] bg-white shadow-md flex-col lg:flex-row items-start gap-6 lg:gap-37 py-6 lg:static lg:flex lg:bg-transparent lg:shadow-none lg:w-auto lg:py-0`}>
          
            <ul className="flex flex-col  lg:flex-row gap-y-6 gap-x-12 text-sm font-medium text-left">
              <li className="cursor-pointer hover:text-red-500">
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-red-500">Contact</li>
              <li className="cursor-pointer hover:text-red-500">About</li>
              <li className="cursor-pointer hover:text-red-500">Sign Up</li>
            </ul>

                <div className="flex flex-col lg:flex-row items-center gap-6 mt-4 lg:mt-0">
              <div className="relative w-60">
                <input className="text-xs w-full py-2.5 pl-5 pr-10 bg-[#f5f5f5] rounded-md focus:outline-none"type="search"placeholder="What are you looking for?"/>
                <IoIosSearch className="text-xl absolute top-2.5 right-3 text-gray-500" />
              </div>
              <div className="flex items-center gap-4">
                <CiHeart className="text-2xl cursor-pointer hover:text-red-500" />
                <div onClick={()=> navigate ("/cartPages")} className='relative'>
                   <MdOutlineAddShoppingCart  className="text-2xl cursor-pointer hover:text-red-500" />
                   <span className="cursor-pointer h-5 w-5 absolute -top-2 -right-2 rounded-full flex justify-center items-center text-xs bg-primary text-white p-1">{data.length}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <FaBarsStaggered onClick={() => setShow(!show)}className="text-2xl cursor-pointer"/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
