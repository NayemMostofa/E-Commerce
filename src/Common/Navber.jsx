import Container from './Container'
import logo from '../assets/Exclusive.png'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Navber = () => {
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.AllProducts.cart);
  const wish = useSelector((state) => state.AllProducts.wish);
  const navigate = useNavigate();

  return (
    <div className="py-4 border-b">
      <Container>
        <div className="relative flex items-center justify-between">
          <NavLink to="/" aria-label="Exclusive home">
            <img src={logo} alt="Exclusive Logo" className="w-28 sm:w-32" />
          </NavLink>

          <div className={`${show ? "flex" : "hidden"} absolute left-0 right-0 top-full z-50 mt-4 flex-col gap-6 border-b bg-white px-5 py-6 shadow-md lg:static lg:mt-0 lg:flex lg:flex-row lg:items-center lg:gap-10 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
            <ul className="flex flex-col gap-5 text-sm font-medium lg:flex-row lg:items-center lg:gap-8">
              <li className="cursor-pointer hover:text-red-500">
                <NavLink to="/" end onClick={() => setShow(false)}>
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-red-500">Contact</li>
              <li className="cursor-pointer hover:text-red-500">About</li>
              <li className="cursor-pointer hover:text-red-500">Sign Up</li>
            </ul>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">
              <div className="relative w-full lg:w-60">
                <input
                  className="w-full rounded-md bg-[#f5f5f5] py-2.5 pl-5 pr-10 text-xs focus:outline-none"
                  type="search"
                  placeholder="What are you looking for?"
                  aria-label="Search products"
                />
                <IoIosSearch className="pointer-events-none absolute right-3 top-2.5 text-xl text-gray-500" />
              </div>
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/Wishlist");
                    setShow(false);
                  }}
                  aria-label={`Wishlist, ${wish.length} items`}
                  className="relative"
                >
                  <CiHeart className="text-2xl hover:text-red-500" />
                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs text-white">
                    {wish.length}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/cartPages");
                    setShow(false);
                  }}
                  aria-label={`Cart, ${cart.length} items`}
                  className="relative"
                >
                  <MdOutlineAddShoppingCart className="text-2xl hover:text-red-500" />
                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs text-white">
                    {cart.length}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setShow((isOpen) => !isOpen)}
              aria-label={show ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={show}
              className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-100"
            >
              {show ? <FaXmark className="text-2xl" /> : <FaBarsStaggered className="text-xl" />}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
