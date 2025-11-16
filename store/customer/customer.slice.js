import { login, signup } from "./customer.action";

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
});

export default customerSlice.reducer