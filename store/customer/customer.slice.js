import { getCustomerInformation, login, signup, updateCustomer } from "./customer.action";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  customer: {},
};

const customerSlice = createSlice({
  name: "customer",

  initialState,

  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signup.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCustomerInformation.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCustomerInformation.fulfilled, (state, action) => {
        state.loading = false;
        state.customer = action.payload
      })
      .addCase(getCustomerInformation.rejected, (state) => {
        state.loading = false;
      })
       .addCase(updateCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCustomer.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateCustomer.rejected, (state) => {
        state.loading = false;
      })
});

export default customerSlice.reducer