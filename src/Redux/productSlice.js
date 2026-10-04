import { createSlice } from '@reduxjs/toolkit'


const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    card: [],  
    cart: localStorage.getItem ("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    wish: localStorage.getItem ("wish") ? JSON.parse(localStorage.getItem("wish")) : [],
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
   wishReducer: (state, action) => {
    const ifExists = state.wish.find((item) => item.id === action.payload.id);
    if (!ifExists) {
    state.wish = [...state.wish, action.payload];
    localStorage.setItem("wish", JSON.stringify ([...state.wish]))
    }
    },
    removeReducer: (state, action) => {
      state.cart = state.cart.filter((item) => item?.id !== action.payload)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    incrementReducer: (state, action) => {
      state.cart = state.cart.map((item) => item?.id === action.payload ? { ...item, quan: item.quan + 1 } : item)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    decrementReducer: (state, action) => {
      state.cart = state.cart.map((item) =>item.id === action.payload ? {...item,quan: item.quan > 1 ? item.quan - 1 : 1,}: item);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

  },
})

export const { productReducer, categoryReducer, cardReducer,cartReducer,removeReducer,incrementReducer,decrementReducer,wishReducer } = productSlice.actions

export default productSlice.reducer
