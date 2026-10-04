import React from 'react'
import Container from '../Common/Container'
import BreadCrumb from '../Common/BreadCrumb'
import Btn from '../Common/Btn'
import Card from '../Common/Card'
import { useSelector } from 'react-redux'

const WishlistPges = () => {
  const wishItems = useSelector((state) => state.AllProducts.wish);

  return (
    <div>
        <Container>
            <BreadCrumb className="mt-10" />
            <div className='flex justify-between items-center my-20'>
                <h2 className='text-xl '>Wishlist ()</h2>
                <Btn>Move All To Bag</Btn>
            </div>
            <div className='flex justify-between items-center'>
                <Card
                  image={wishItems.thumbnail}
                  dispercent="40"
                  title={wishItems.title}
                  disprice={wishItems.price - (wishItems.price * 40) / 100} 
                  price={wishItems.price}
                  rating={wishItems.rating}
                  review="88"
                />
               
            </div>
        </Container>
    </div>
  )
}

export default WishlistPges