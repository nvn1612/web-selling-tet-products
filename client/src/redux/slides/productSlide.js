import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    search: ''
  },
  reducers: {
    searchProduct: (state, action) => {
      state.search = action.payload
    }
  }
})  


export const { searchProduct } = productSlice.actions

export default productSlice.reducer