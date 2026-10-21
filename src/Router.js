import { createBrowserRouter } from "react-router";
import Home from '../src/Pages/Home'
import Root from "./Root";
import Shop from '../src/Pages/Shop'
import productsDetails from "./Pages/productsDetails";
import cartPages from "./Pages/cartPages";
import WishlistPges from "./Pages/WishlistPges";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import MyAccount from "./Pages/MyAccount";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "productsDetails/:id", Component: productsDetails },
      { path: "cartPages", Component: cartPages },
      { path: "Wishlist", Component: WishlistPges },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "signup", Component: SignUp },
      { path: "login", Component: LogIn },
      { path: "myaccount", Component: MyAccount },

      
      
    ],
  },
]);