import React from 'react'
import Container from '../Common/Container'
import BreadCrumb from '../Common/BreadCrumb'
import Btn from '../Common/Btn'
import Card from '../Common/Card'
import { useSelector } from 'react-redux'

const WishlistPges = () => {
  const wishItems = useSelector((state) => state.AllProducts.wish);
console.log(wishItems)
  return (
    <div>
        <Container>
            <BreadCrumb className="mt-10" />
            <div className='flex justify-between items-center my-20'>
                <h2 className='text-xl '>Wishlist ({wishItems.lengt})</h2>
                <Btn>Move All To Bag</Btn>
            </div>
            <div className='grid gap-7.5 grid-cols-4 items-center'>
                {
                  wishItems.map((item)=>{
                    return <Card
                  image={item.thumbnail}
                  dispercent="40"
                  title={item.title}
                  disprice={item.price - (item.price * 40) / 100} 
                  price={item.price}
                  deletIcon="flex items-center justify-center"
                  heartIcon="hidden"
                  eyeIcon="hidden"
                 
              
                />
                  })
                }
               
            </div>
        </Container>
    </div>
  )
}

export default WishlistPges