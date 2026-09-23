import React from 'react'
import { useSelector } from "react-redux";
import Container from '../Common/Container'
import BreadCrumb from '../Common/BreadCrumb'
import CardItem from '../Common/CardItem'

const CartPages = () => { 

  const cardItems = useSelector((state) => state.AllProducts.cart);

  return (
    <div className="pb-52">
      <Container>
        <BreadCrumb />
        <div className="flex justify-between px-10 py-6 rounded-sm shadow-sm">
          <h3 className="w-[25%]">Product</h3>
          <h3 className="w-[25%]">Price</h3>
          <h3 className="w-[25%]">Quantity</h3>
          <h3 className="w-[25%]">Subtotal</h3>
        </div>

        {cardItems.map((item) => {
  return (
    <CardItem
      id={item.id}
      key={item.id}      
      imgSrc={item.thumbnail}
      price={item.price}
      brand={item.brand}
    />
  )
})}

      </Container>
    </div>
  )
}

export default CartPages;
