import Banner from '../Home/Banner'
import BestSells from '../Home/BestSells'
import Category from '../Home/Category'
import FlashSales from '../Home/FlashSales'

import Music from '../Home/Music'
import NewArrival from '../Home/NewArrival'
import OurProduct from '../Home/OurProduct'


const Home = () => {
  return (
    <div>
      
      <Banner />
      <FlashSales/>
      <Category />
      <BestSells />
      <Music />
      <OurProduct />
      <NewArrival />
      
    </div>
  )
}

export default Home