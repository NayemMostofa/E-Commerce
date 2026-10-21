import { Outlet, useLocation } from 'react-router'
import Header from './Common/Header';
import Navber from './Common/Navber';
import Footer from './Home/Footer';



const Root = () => {
  const { pathname } = useLocation()
  const isAuthPage = pathname === '/signup' || pathname === '/login'

  return (
    <div>
      {!isAuthPage && <Header />}
      <Navber />
      <Outlet />
      {!isAuthPage && <Footer />}
 
    </div>
  );
}

export default Root