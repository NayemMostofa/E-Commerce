import { createSlice, configureStore } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    productReducer: ( state,action) => {
      state.products = action.payload
    },
      categoryReducer: ( state,action) => {
      state.products = action.payload
    },
    
   
  },
});

export const { productReducer,categoryReducer} = productSlice.actions;

export default productSlice.reducer;