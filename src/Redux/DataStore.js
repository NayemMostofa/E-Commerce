import { createSlice } from "@reduxjs/toolkit";

export const DataStore = createSlice({
  name: "dataStore",
  initialState: {
    products: [],
   

  },
  reducers: {
    productReducer: (state, action) => {
      state.products = action.payload;
    }

  },
});

// Action creators are generated for each case reducer function
export const { productReducer } = DataStore.actions;

export default DataStore.reducer;