import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    card: [],  
    cart: [],
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
    cartReducer :(state,action)=> {
      state.cart = [...state.cart,action.payload]
    }
  },
})

export const { productReducer, categoryReducer, cardReducer,cartReducer } = productSlice.actions

export default productSlice.reducer
