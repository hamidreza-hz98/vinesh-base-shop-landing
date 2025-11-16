const { createSlice } = require("@reduxjs/toolkit")
const { getCart, getCustomerCart, updateCart, createCart } = require("./cart.action")

const initialState = {
  loading: false, 
  cart: {}
}

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {},

  extraReducers: builder => 
    builder
  .addCase(getCart.pending, state => {
      state.loading = true
    })
  .addCase(getCart.fulfilled, (state, action) => {
      state.loading = false
      state.cart = action.payload
    })
    .addCase(getCart.rejected, state => {
      state.loading = false
    })
    .addCase(getCustomerCart.pending, state => {
      state.loading = true
    })
  .addCase(getCustomerCart.fulfilled, (state, action) => {
      state.loading = false
      state.cart = action.payload
    })
  .addCase(getCustomerCart.rejected, state => {
      state.loading = false
    })
  .addCase(createCart.pending, state => {
      state.loading = true
    })
  .addCase(createCart.fulfilled, (state, action) => {
      state.loading = false
      state.cart = action.payload
    })
  .addCase(createCart.rejected, state => {
      state.loading = false
    })
  .addCase(updateCart.pending, state => {
      state.loading = true
    })
  .addCase(updateCart.fulfilled, (state, action) => {
      state.loading = false
      state.cart = action.payload.data

    })
  .addCase(updateCart.rejected, state => {
      state.loading = false
    })
})

export default cartSlice.reducer