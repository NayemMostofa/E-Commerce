import React, { useEffect, useState } from 'react'
import Container from '../Common/Container'
import BreadCrumb from '../Common/BreadCrumb'
import star from '../assets/Five star.png'
import { useParams } from 'react-router'
import { CiHeart } from "react-icons/ci";
import Btn from '../Common/Btn'
import delivary from '../assets/Vector.png'
import icon from '../assets/Icon-return.png'

const productsDetails = () => {

    const [productsDetails,setProductsDetails] = useState ({})
     const [productsImages,setProductsImages] = useState ([])

  let {id} = useParams();
  useEffect(() => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setProductsDetails (data),
            setProductsImages (data.images) 
        })
        
         
    }, [])



  return (
    <div className='py-25'>
        <Container>
            <BreadCrumb />
            <div className='mt-20 flex justify-between '>
                <div className='flex gap-7.5 items-center'>
                    <div className='space-y-4'>
                        {
                           productsImages.map((image)=>{
                            return <img className='w-42.5 h-34.5' src={image} alt="" />
                           })

                        }
                    </div>
                    <div>
                        <img src={productsDetails.thumbnail} alt="" />
                    </div>

                </div>
                <div className='w-100'>
                    <h2 className='text-2xl font-semibold'>{productsDetails.title}</h2>
                    <div className='flex gap-4 mt-4 mb-16'>
                        <img src={star} alt={productsDetails.rating} />
                        <h5 className='text-gray-400'>({productsDetails?.reviews?.length})</h5>
                        <h5 className='text-[#00FF66]'>{productsDetails.availabilityStatus}</h5>
                     </div>
                     <p>{productsDetails.description}</p>

                     
  <ul className="text-xl">
  
    <li className="flex items-center gap-6 text-xl">
      Colours :
      <div className="flex gap-4">
        <div className="w-5 h-5 rounded-full border-2 flex justify-center items-center">
          <div
            className="w-3 h-3 border rounded-full"
            style={{ backgroundColor: "#A0BCE0" }}
          ></div>
        </div>
        <div className="h-5 w-5 rounded-full bg-[#E07575]"></div>
      </div>
    </li>

  
    <li className="flex gap-6 py-6">
      <h3>Size :</h3>
      <ul className="flex gap-4 text-sm">
        {["SM", "S", "M", "L", "XL"].map((size) => (
          <li
            key={size}
            className="w-8 h-8 rounded-sm border border-[#00000069] flex justify-center items-center hover:bg-primary hover:text-white cursor-pointer"
          >
            {size}
          </li>
        ))}
      </ul>
    </li>

    <li>
      <ul className="h-11 flex gap-4 text-xl">

        <li className="rounded-sm border border-[#00000069] flex">
          <div className="w-10 h-full text-lg flex justify-center items-center">
            -
          </div>
          <div className="flex w-20 justify-center items-center border-x border-[#00000069]">
            2
          </div>
          <div className="flex w-10 justify-center items-center">+</div>
        </li>

        <li>
          <Btn
            onClick={() => dispatch(cardReducer(productDetails))}
            className="h-11 flex justify-center items-center text-sm"
          >
            Buy Now
          </Btn>
        </li>

       
        <li className="h-10 w-10 rounded-sm border flex justify-center items-center">
          <CiHeart className="text-3xl" />
        </li>
      </ul>
    </li>
  </ul>


  <div className="w-full rounded-sm border border-[#00000069] py-6 mt-6">
  
    <div className="pl-4 pr-13 flex gap-4 items-center pb-4 border-b border-[#00000069]">
      <div>
        <img src={delivary} alt="delivery" />
      </div>
      <div className="font-medium space-y-2">
        <h3>Free Delivery</h3>
        <p className="text-[12px] underline">
          Enter your postal code for Delivery Availability
        </p>
      </div>
    </div>
   
    <div className="pl-4 pr-13 mt-4 flex gap-4 items-center">
      <div>
        <img src={icon} alt="return" />
      </div>
      <div className="font-medium space-y-2">
        <h3>Return Delivery</h3>
        <p className="text-[12px]">
          Free 30 Days Delivery Returns.{" "}
          <span className="underline">Details</span>
        </p>
      </div>
    </div>
  </div>                                 
      </div>
     </div>
   <div>
   </div>
  </Container>
</div>
  )
}

export default productsDetails