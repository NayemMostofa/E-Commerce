import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    card: [],  
    cart: localStorage.getItem ("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    productReducer: (state, action) => {
      state.products = action.payload
    },
    categoryReducer: (state, action) => {
      state.products = action.payload
    },
    cardReducer: (state, action) => {
      const product = action.payload
      const alreadyAdded = state.card.some((item) => item.id === product.id)
      if (!alreadyAdded && product?.id) {
        state.card = [product, ...state.card]
      }
    },
    cartReducer: (state, action) => {
    const ifExists = state.cart.find((item) => item.id === action.payload.id);
    if (!ifExists) {
    state.cart = [...state.cart, action.payload];
    localStorage.setItem("cart", JSON.stringify ([...state.cart]))
    }
   },
   removeReducer:(state,action) =>{
    state.cart = state.cart.filter((item)=>item.id !== action.payload)
   }

  },
})

export const { productReducer, categoryReducer, cardReducer,cartReducer,removeReducer } = productSlice.actions

export default productSlice.reducer
