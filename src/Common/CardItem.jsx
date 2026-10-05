import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrementReducer, incrementReducer, removeReducer } from "../Redux/productSlice";

const CardItem = ({ imgSrc, price, brand ,id,quan}) => {
 
   const dispatch = useDispatch()

  return (
    <div>
      <div className="flex justify-between items-center mt-10 px-10 py-6 rounded-sm shadow-sm">
     
        <div className="w-[25%] flex items-center gap-4">
          <div>
            <span onClick={()=>{dispatch(removeReducer(id))}} className="cursor-pointer h-5 w-5 rounded-full bg-primary text-white flex justify-center items-center ">x</span>
            <img className="w-12.5 h-10" src={imgSrc} alt={brand} />
          </div>
          <h3>{brand}</h3>
        </div>

        <h3 className="w-[25%]">${price}</h3>

        <div className="w-[25%] mx-auto">
          <div className="h-11 w-18 flex justify-center rounded-sm border border-[#00000061] items-center gap-4">
            <h6>{quan}</h6>
            <div className="flex flex-col">
              <MdOutlineKeyboardArrowUp onClick={() => dispatch(incrementReducer(id))} className="cursor-pointer" />
              <MdOutlineKeyboardArrowDown onClick={() => dispatch(decrementReducer(id))} className="cursor-pointer" />
            </div>
          </div>
        </div>

        <h3 className="w-[25%]">${Number (quan*price).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CardItem;
