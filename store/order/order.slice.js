const { createSlice } = require("@reduxjs/toolkit")
const { createOrder, getCustomerOrders, getCustomerOrderDetails } = require("./order.action")

const initialState = {
  loading: false, 
  order: {},
  orders: {}
}

const orderSlice = createSlice({
  name: "order",
  initialState,

  reducers: {},

  extraReducers: builder => 
    builder
  .addCase(createOrder.pending, (state) => {
    state.loading = true
  })
  .addCase(createOrder.fulfilled, (state) => {
    state.loading = false
  })
  .addCase(createOrder.rejected, (state) => {
    state.loading = false
  })
  .addCase(getCustomerOrders.pending, (state) => {
    state.loading = true
  })
  .addCase(getCustomerOrders.fulfilled, (state, action) => {
    state.loading = false
    state.orders = action.payload
  })
  .addCase(getCustomerOrders.rejected, (state) => {
    state.loading = false
  })
  .addCase(getCustomerOrderDetails.pending, (state) => {
    state.loading = true
  })
  .addCase(getCustomerOrderDetails.fulfilled, (state, action) => {
    state.loading = false

    state.order = action.payload
  })
  .addCase(getCustomerOrderDetails.rejected, (state) => {
    state.loading = false
  })
})

export default orderSlice.reducer