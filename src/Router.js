import { createBrowserRouter } from "react-router";
import Home from '../src/Pages/Home'
import Root from "./Root";
import Shop from '../src/Pages/Shop'


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      
    ],
  },
]);