import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import star from '../assets/Five star.png'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux'

const Card = ({dispercent,
  image,AddToCardCss,title,disprice,price,rating,review,id,productsDetail}) => {

      let navigate = useNavigate();

    const handleProductsDtls = ()=>{
      navigate (`/productsDetails/${id}`)
    }

    const dispatch = useDispatch ()
  

    const handleCart = () => {
  dispatch(cartReducer(productsDetail)); 
  navigate("/cartPages");
};

  return (
    <div className=" w-67.5  group h-87.5 ">
      <div className=" relative  ">
        <div className=" h-62.5 relative overflow-hidden pt-8 pl-10 ">
          <img onClick={handleProductsDtls} src={image} alt="" className='object-cover cursor-pointer' />
          <span className='py-1 px-3 bg-primary text-white rounded-sm text-xs absolute top-3 left-3'>-{dispercent}%</span>
          <div className='absolute top-3 right-3 space-y-4'>
            <div className='w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center'>
              <CiHeart className='text-xl' />
            </div>
            <div className='w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center'>
              <IoEyeOutline className='text-xl' />
            </div>
          </div>
         <button onClick={handleCart}
          className={` ${AddToCardCss} w-full py-2 cursor-pointer bg-black rounded-bl-sm rounded-br-sm rounded-tr-xs rounded-tl-xs  absolute left-0 bottom-0 translate-y-full   duration-500 ease-in group-hover:translate-y-0  text-center text-white `}>Add To Cart</button>
        </div>                        
      </div> 
      <h3 className='font-medium'>{title}</h3>  
        <div className='flex gap-4'>
          <h3 className='font-medium text-primary'>${disprice}</h3>
          <h3 className='font-medium text-gray-400 line-through'>${price}</h3>
        </div> 
        <div className='flex gap-4 mt-2'>
          <img src={star} alt="" allowHalf value={rating} />
       <h4 className='font-medium text-gray-400'>({review})</h4>

        </div>
    
    </div>
  )
}

export default Card