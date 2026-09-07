import React from 'react'

import { Outlet } from 'react-router'
import Header from './Common/Header';
import Navber from './Common/Navber';
import Footer from './Home/Footer';



const Root = () => {
  return (
    <div>
      <Header />
      <Navber />
      <Outlet />
      <Footer />
 
    </div>
  );
}

export default Root