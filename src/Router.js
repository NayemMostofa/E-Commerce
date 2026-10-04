import { createBrowserRouter } from "react-router";
import Home from '../src/Pages/Home'
import Root from "./Root";
import Shop from '../src/Pages/Shop'
import productsDetails from "./Pages/productsDetails";
import cartPages from "./Pages/cartPages";
import WishlistPges from "./Pages/WishlistPges";


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

      
      
    ],
  },
]);