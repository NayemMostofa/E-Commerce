import React, { useEffect, useState } from 'react'
import Container from '../Common/Container'
import BreadCrumb from '../Common/BreadCrumb.jsx'
import Paginate from '../Component/Paginate.jsx'
import CardSkeleton from '../Component/CardSkeleton.jsx'
import { useDispatch } from 'react-redux'
import { categoryReducer, productReducer } from '../Redux/productSlice.js'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [show, setShow] = useState(6)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState([])

  let dispatch = useDispatch()

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products || []
        setProducts(productList)
        dispatch(productReducer(productList))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [dispatch])

  useEffect(() => {
    const uniCategory = [...new Set(products.map((item) => item.category))]
    setCategory(uniCategory)
  }, [products])

  const handleCategory = (item) => {
    if (item === "all") {
      dispatch(productReducer(products))
    } else {
      const filteredProducts = products.filter(
        (categoryItem) => categoryItem.category === item
      )
      dispatch(categoryReducer(filteredProducts))
    }
  }

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
              <li 
                onClick={() => handleCategory("all")} 
                className="cursor-pointer list-none font-semibold"
              >
                All Products
              </li>
              {
                category.map((item) => {
                  return (
                    <li 
                      key={item}
                      onClick={() => handleCategory(item)} 
                      className='cursor-pointer capitalize'
                    >
                      {item}
                    </li>
                  )
                })
              }
            </ul>

            <h3 className=" mt-10 mb-5 text-lg font-semibold">Shop by Color</h3>
            <ul className=" space-y-2 ">
              <li>
                <span className=" w-3 h-3 rounded-full bg-black inline-block "></span>
                Color 1
              </li>
              <li>
                <span className=" w-3 h-3 rounded-full bg-[#ff1717] inline-block"></span>
                Color 2
              </li>
              <li>
                <span className=" w-3 h-3 rounded-full bg-[#11ff0d] inline-block"></span>
                Color 3
              </li>
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
                <Paginate itemsPerPage={show} />
              )
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop
