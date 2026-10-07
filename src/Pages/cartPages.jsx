import { useSelector } from "react-redux";
import Container from '../Common/Container'
import BreadCrumb from '../Common/BreadCrumb'
import CardItem from '../Common/CardItem'
import Btn from "../Common/Btn";
import { useNavigate } from "react-router";

const CartPages = () => { 

  const cardItems = useSelector((state) => state.AllProducts.cart);
  const navigate = useNavigate();

  return (
    <div className="pb-52">
      <Container>
        <BreadCrumb />
        <div className="flex justify-between px-10 py-6 rounded-sm shadow-sm">
          <h3 className="w-[25%]">Product</h3>
          <h3 className="w-[25%]">Price</h3>
          <h3 className="w-[25%]">Quantity</h3>
          <h3 className="w-[25%]">Subtotal</h3>
        </div>

        {cardItems
          .filter((item) => item && item.id != null)
          .map((item) => (
            <CardItem
              id={item.id}
              key={item.id}
              imgSrc={item.thumbnail}
              price={item.price}
              brand={item.brand ?? item.title}
              quan={item.quan}
            />
          ))}

          <div className="flex justify-between items-center mt-6">
            <Btn onClick={() => navigate("/shop")}>Return To Shop</Btn>
            <Btn>Update Cart</Btn>
          </div>

          <div className="flex justify-between mt-20">
            <div className="flex gap-7">
              <div>
                <input type="text" placeholder="Coupon Code" className="py-4 pl-6 px-16 border-1"/>
              </div>
              <div>
                <Btn>Apply Coupon</Btn>
              </div>
            </div>
            <div className="w-117.5 border py-8 px-7 rounded-sm">
              <h3>Cart Total</h3>
              <div className="flex justify-between items-center border-b py-4">
                <h3>Subtotal</h3>
                <h3>$</h3>
              </div>
              <div className="flex justify-between items-center border-b py-4">
                <h3>Shipping</h3>
                <h3>$</h3>
              </div>
              <div className="flex justify-between items-center  py-4">
                <h3>Total:</h3>
                <h3>$</h3>
              </div>
              <Btn className="mx-auto block">
                Procees to checkout
              </Btn>


            </div>
          </div>

      </Container>
    </div>
  )
}

export default CartPages;
