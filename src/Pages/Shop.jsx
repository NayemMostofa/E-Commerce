import React, { useEffect, useState } from 'react'
import Container from '../Common/Container'
import BreadCrumb from '../Common/BreadCrumb.jsx'
import Paginate from '../Component/Paginate.jsx'
import CardSkeleton from '../Component/CardSkeleton.jsx'
//import { useDispatch} from "react-redux";
//import { productReducer } from '../Redux/DataStore.js'



//let dispatch = useDispatch ()

const Shop = () => {
  const [products, setProducts] = useState([])
  const [show, setShow] = useState(6)
  const [loading, setLoading] = useState(true)
  const [category,setCategory] = useState ([])
 

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      //.then ((data)=>dispatch (productReducer (data.products)))
      .then(data => {
        setProducts(data.products)
        setLoading(false)  
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect ( ()=>{
    const uniCategory = [... new Set (products.map ( (item)=>item.category))]
    setCategory (uniCategory)
  
  },[products])

  return (
    <div>
      <Container>
        <BreadCrumb />
        <div className='flex justify-between items-center mb-7.5'>
          <h3 className='text-xl font-bold'>Shop by Category</h3>
          <div className='flex items-center gap-4'>
            <h3>Show :</h3>
            <select 
              onChange={(e) => setShow(Number(e.target.value))} 
              className="px-[10.75px] py-1 rounded-sm border border-gray-400"
            >
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-[20%] mb-6 lg:mb-0">
            <ul className="text-black space-y-4 mt-6 pb-6">
              {
                 category.map( (item) =>{
                  return <li className='capitalize'>{item}</li>
                 })
                 
              }
            </ul>
          </div>
          <div className="w-full lg:w-[80%] flex flex-wrap justify-between gap-x-10 gap-y-6 pb-20"> 
            {
              loading ? (
                <div className='flex flex-wrap justify-between'>
                 <CardSkeleton />
                 <CardSkeleton />
                 <CardSkeleton />
                 <CardSkeleton />
                 <CardSkeleton />
                 <CardSkeleton />
                 
                </div>
              ) : (
                <Paginate itemsPerPage={show} products={products} />
              )
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop
